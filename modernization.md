# Queens Finest Prints — Modernization Spec

Executable spec for Claude Code. Run against https://github.com/akabhowmick/QueensFinestPrints (main branch). Same template lineage as 3dVerse, so the phase structure mirrors that spec. Each phase is its own branch and PR with verification gates. Do not merge a phase until its gates pass.

Stack today: Vite 5 + React 18 + TS, static SPA, Netlify (public/\_redirects present). PayPal via @paypal/react-paypal-js, forms via FormSubmit.co, cart in localStorage.

---

## Phase 0 — Baseline (no branch, just verify)

- `npm ci && npm run build && npm run lint` must pass before starting. Record bundle size from the Vite build output for later comparison.
- Take Playwright screenshots of: home, /card-stands, a product description page, /cart, /checkout, /contact-us, /upload-image at 375px and 1280px widths. Save to `docs/screenshots/baseline/`. These are the regression reference for every later phase.

---

## Phase 1 — Security, correctness, and a11y foundations

Branch: `phase-1/security-a11y`

### 1.1 Fix the broken production favicons (real bug)

`index.html` references `./src/assets/favicon/...`. Vite does not serve `/src` paths in production builds, so favicons and the webmanifest are broken on the live site. Move the favicon set to `public/favicon/` and update all links (also fix the double-slash paths like `favicon//favicon-32x32.png`).

### 1.2 Environment variables

- Move `paypalClientId` from `src/utils/ApiKeys.ts` to `import.meta.env.VITE_PAYPAL_CLIENT_ID`. The client ID is public by design, but it should not be committed, and env vars let sandbox/production differ per deploy.
- Add `.env.example` with `VITE_PAYPAL_CLIENT_ID=`.
- Document in README that Netlify env vars must be set.

### 1.3 Stop exposing raw email addresses

- FormSubmit endpoints are built from the plain Gmail address (`formsubmit.co/queensfinestprints@gmail.com`). FormSubmit issues a random-string alias after first activation; switch all three form actions (`contactFormId`, `imageUploadFormId`, `orderReviewFormId`) to the alias form (`formsubmit.co/<random-id>`) so the address can't be scraped from the bundle.
- `src/utils/HelpfulText.ts` contains a personal email in `howToUploadPhoto` and it's truncated/broken: `christiancardenas13@gmail.` Remove it entirely and point users to the on-site upload page and the business contact form only.

### 1.4 HTTPS everywhere

`uploadImagePage` and `thankYouPage` in ApiKeys.ts use `http://`. Change to `https://`. Also replace the protocol-relative `//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/...` stylesheet (see 1.7).

### 1.5 localStorage hardening

`CartProvider` does `JSON.parse(localStorage.getItem(...))` with no validation. Anyone (or a stale schema) can poison state and crash the app or alter prices.

- Wrap parse in try/catch; on failure, clear the key.
- Validate the parsed array against the `Product` shape (a small runtime guard is fine; the repo already ships `yup` if you want schema validation without new deps).
- Critically: never trust `price` from localStorage. On hydrate, re-look up each item's price from `src/utils/Products.ts` by id and overwrite. Quantity and customization choices can come from storage; money cannot.

### 1.6 Security headers

Add `public/_headers` (Netlify format):

- `Content-Security-Policy` allowing self, PayPal domains (`*.paypal.com`, `*.paypalobjects.com`), Google Fonts, FormSubmit for form-action, and nothing else.
- `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` minimal, `X-Frame-Options: DENY`.
- Keep the existing `_redirects` SPA rule.

### 1.7 Dead weight in index.html

- Remove the Uploadcare `<script>` from index.html and `@uploadcare/blocks` from package.json — nothing in `src` references either (grep confirms zero usage).
- Remove the Font Awesome 4.1.0 CDN stylesheet; the app already uses `@fortawesome/react-fontawesome` packages.
- Trim the Poppins Google Fonts request from 18 weights/styles to the 3–4 actually used.

### 1.8 Accessibility pass (WCAG 2.1 AA)

- Fix copied-over alt text: Navbar and Footer logos say `alt="tkd-main-logo"` (leftover from the taekwondo project). Use `alt="Queens Finest Prints logo"`.
- Replace filename-style alts (`alt="not-found-page.png"`, `alt="cart-image"`) with descriptive text; carousel/product images should use the product name.
- Add a skip-to-content link before the navbar.
- Hamburger menu (`MenuIcon` div) must be a `<button>` with `aria-expanded` and `aria-controls`.
- `ContactForm` select: options render with empty children (`<option ... label={...}></option>`); give options text content, and don't render nav links inside `<li>` without a parent `<ul>` (NavLink wraps `<li>` — invert so `<li>` wraps the link, inside `NavUnlisted`'s list).
- Ensure focus states are visible on all interactive elements; carousels need pause controls and must not trap focus.
- Run `eslint-plugin-jsx-a11y` (add to ESLint config, fix all errors) and an axe pass on the key pages.

### 1.9 Housekeeping

- Rename `src/Pages/Home/Automated Carousel.tsx` (space in filename) to `AutomatedCarousel.tsx`.
- Remove unused `oldlogo.png` and any other unreferenced assets (verify with grep before deleting).
- package.json `name` is `vite-project`; set it to `queens-finest-prints`.

**Gates:** build + lint clean with jsx-a11y enabled; axe reports no critical/serious violations on home, product, cart, checkout, contact; favicons load from a production preview build (`vite preview`); no `http://` or raw email strings in `dist/`.

---

## Phase 2 — UI consolidation, responsiveness, dependency modernization

Branch: `phase-2/ui-consolidation`

### 2.1 One UI system: MUI only

The repo currently ships MUI + bootstrap + react-bootstrap + mdb-react-ui-kit + styled-components + emotion (as MUI's engine) + FontAwesome. Remove `bootstrap`, `react-bootstrap`, `mdb-react-ui-kit`, and `styled-components`; port their usages to MUI equivalents (grep each import site first and list them in the PR description). Replace FontAwesome icons with `@mui/icons-material` where practical; if brand icons (Etsy, eBay, Facebook, Instagram) are needed, keep only `free-brands-svg-icons` and drop solid/regular packages.
Convert `NavbarStyles.tsx` (styled-components) to MUI `styled` or plain CSS.

### 2.2 Breakpoint normalization

Audit all CSS files for hardcoded breakpoints; normalize to MUI's default breakpoints (600/900/1200/1536). Verify no horizontal scroll at 320px. Checkout stepper, product grid, and carousels must be verified at 375, 768, 1280.

### 2.3 Media optimization

`src/assets` is 30MB; `main.mp4` alone is 8.4MB and several PNGs exceed 1MB.

- Convert product PNGs to WebP (keep PNG fallback only if needed), target under 150KB each, with explicit `width`/`height` attributes and `loading="lazy"` below the fold.
- Compress `main.mp4` (720p, ~1.5–2MB target), add `preload="metadata"`, keep the existing poster image.
- Add `srcset` for product grid images.

### 2.4 Dependency upgrades

React 18 → 19, Vite 5 → 7, MUI 5 → latest (Grid API changes: `item`/`xs` props are removed in Grid v2 — Shipping.tsx and Review.tsx use the old API heavily), react-router-dom 6 → 7 (createBrowserRouter API is compatible), TypeScript and ESLint current. Upgrade in that order, building between each.

**Gates:** build + lint clean; bundle size reduced vs Phase 0 baseline (report numbers in PR); Playwright screenshots at 375/1280 match baseline layout intent (no regressions); Lighthouse performance ≥ 90 on home and product pages against a preview build.

---

## Phase 3 — Server-side payment integrity

Branch: `phase-3/server-payments`

Same core vulnerability as 3dVerse: `ButtonWrapper` calls `actions.order.create` with `finalTotal` computed client-side from localStorage-backed cart state. Anyone can pay $0.01.

### 3.1 Netlify Functions

- `netlify/functions/create-order.ts`: accepts `{ items: [{ id, quantity, choices }] }`, recalculates the total from a server-side price list (extract prices from `Products.ts` into a shared module importable by both client and function, or duplicate into the function — shared module preferred), applies the same tax (8.75%) and shipping ($5) rules, then calls PayPal Orders v2 API with server credentials (`PAYPAL_CLIENT_ID`, `PAYPAL_CLIENT_SECRET` env vars, sandbox vs live by env).
- `netlify/functions/capture-order.ts`: captures by order ID and returns the capture result.
- Client `createOrder` becomes a fetch to `create-order` sending only ids/quantities; `onApprove` calls `capture-order` and only sets `paymentSuccess` on a verified `COMPLETED` capture status.

### 3.2 Order integrity in the FormSubmit summary

`Review.tsx` emails the order summary with a client-computed `Total-Cost`. Include the PayPal order ID and the server-captured amount in the summary instead, so the emailed record reflects what was actually charged.

### 3.3 Payment UX

- The "Next" button currently swal-errors if payment hasn't happened; disable it until capture succeeds instead.
- Handle capture failure/cancel states with visible messaging.

**Gates:** sandbox end-to-end purchase succeeds; tampering test — modify localStorage cart price in devtools, confirm the charged amount still matches server calculation; no PayPal secret in client bundle (grep `dist/`); functions have basic input validation and return 400 on malformed carts.

---

## Phase 4 — Visual identity and professionalism

Branch: `phase-4/visual-redesign`

3dVerse got a drafting/blueprint identity. Queens Finest Prints sells sports card stands, memorabilia displays, and city skylines out of Queens — the identity should feel like a collector's display case with borough pride. Commit to this direction; do not substitute defaults.

### 4.1 Committed palette

- Ink (text, primary): `#171C26`
- Paper (background): `#FAF8F4`
- Queens blue (primary brand, links, buttons): `#1D3D6E`
- Line (borders, dividers): `#CBD2DC`
- Accent orange (CTAs, highlights, cart badge): `#F26430`
  Use these exact values as MUI theme tokens (`palette.primary.main = #1D3D6E`, `palette.secondary.main = #F26430`, etc.). No other saturated colors.

### 4.2 Typography

Two fonts only: a display face for headings with athletic/collector character (Archivo or Barlow Condensed, weights 600/700) and Inter for body (400/500). Replace Poppins. Load via Google Fonts with only the listed weights. Set a modular type scale in the MUI theme.

### 4.3 Signature element: the display case card

Product cards render like a collectible in a case: subtle inset border (1px `#CBD2DC`), a soft pedestal shadow beneath the product image, product name in the display face, price in a small tag-style chip (accent orange outline). Hover lifts the card 2px with a slightly deeper shadow. Apply consistently in ProductGrid, carousels, and cart items.

### 4.4 Hero and home

Rebuild the hero: compressed video (from 2.3) or a static hero image with the display-case framing, one clear headline, one CTA ("Shop Card Stands") in accent orange, secondary link to Contact. Kill any wall-of-text; the current `heroText` has a grammar error ("we able to develop") — rewrite.

### 4.5 Navbar and footer

Solid paper background, ink text, blue active-link underline (3px, accent orange for the cart when items > 0). Footer: three columns (shop links, contact, socials), brand line "Made in Queens, NY".

### 4.6 Checkout polish

The MUI stepper flow stays, themed to the palette. Consistent button hierarchy: contained blue for primary actions, text buttons for back.

### 4.7 Copy pass — NEEDS YOUR INPUT

Flagging like last time: product descriptions, hero copy, and the how-to-order text should get a voice pass from you (Ben/client). The spec should fix grammar and remove the broken email, but brand voice decisions belong to the client.

### 4.8 Verification loop

Playwright screenshots of every route at 375/1280 into `docs/screenshots/phase-4/`; compare against baseline for layout regressions; verify all text/background pairs meet 4.5:1 contrast (the accent orange on paper fails for body text — use it only for large text, borders, and fills with ink text on top).

**Gates:** contrast audit passes; screenshots reviewed; Lighthouse accessibility ≥ 95; no non-palette colors in computed styles on key pages.

---

## Execution order and PR hygiene

1. Phase 1 → PR with before/after axe results and a checklist mapping to 1.1–1.9.
2. Phase 2 → PR with bundle size table (before/after) and removed-dependency list.
3. Phase 3 → PR with sandbox test evidence and the tampering test result.
4. Phase 4 → PR with the screenshot grid.

Each PR: conventional commits, no unrelated diffs, and `npm run build && npm run lint` in CI or documented locally.
