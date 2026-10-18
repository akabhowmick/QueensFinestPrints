# QueensFinestPrints TODO

Tracks outstanding work. Update as items land.

## Urgent — PayPal (blocks a real launch)
- [ ] **PayPal is still the main open item.** Server-side price authority
      (Phase 3) is built and unit/tamper-tested, but nobody has run a single
      real purchase through it yet:
  - [ ] Confirm who owns the QFP PayPal account and get sandbox **and** live
        Client ID + Secret (same drill as 3dVerse)
  - [ ] Set Netlify env vars, with `PAYPAL_ENV` scoped per deploy context
  - [ ] With real sandbox credentials: run `netlify-cli dev` locally and do
        one full sandbox checkout end to end — create order → approve →
        capture — before this merges to `main` or deploys anywhere
  - [ ] Re-run the tamper test against that live sandbox call (not just the
        unit tests), since those only exercised the functions in isolation

## Phase 4 redesign — in progress, not merged
Branch `phase-4/premium-redesign` (off `phase-2/ui-consolidation`). The
"ink on paper" layout, cards, PDP, cart drawer, and checkout palette pass
are built and committed locally. Still open before this can land:
- [ ] **Palette diverged from the written spec.** `qfp-phase-4-design.md`
      still says cyan `--accent` / magenta `--mark`. The actual build uses
      the Queens Finest Prints logo blue (`#0B3B9C`) and orange (`#F5791D`)
      instead, at your request — the doc needs updating so it isn't
      contradicted by the site, or the colors need reverting. Pick one.
- [ ] Lighthouse pass on `/` and a product page against a preview build
      (target: Performance 90+, Accessibility 95+) — not run yet
- [ ] Keyboard-only pass: nav, mobile menu, cart drawer (focus trap /
      Escape / focus return), PDP option picker, cart stepper
- [ ] `prefers-reduced-motion` check (crop marks, hero video/poster swap,
      image hover scale)
- [ ] Playwright screenshots of every route at 360/1440 saved into
      `docs/screenshots/phase-4/` (captured ad hoc during the session but
      not committed into that folder yet)
- [ ] Product photos aren't visually uniform inside the new fixed image
      wells — some have their own border/background baked into the photo
      (e.g. the Game Display Card Holder Stand). Needs recropped source
      images, not a CSS fix.
- [ ] Known pre-existing gap, not a blocker: `eslint-plugin-jsx-a11y@6.10.2`
      has no release supporting `eslint@^10`. Worked around with
      `.npmrc`'s `legacy-peer-deps=true`; revisit once jsx-a11y catches up.
- [ ] No PR yet for this branch — none until you say go, per the usual rule

## Landed
- [x] Phase 1: correctness, accessibility, and quick security wins per the
      modernization spec (commit df13e7c)
- [x] Phase 3: server-side price authority (`shared/pricing.ts`, two
      Netlify Functions, per-SKU pricing, tamper tests all passing at the
      unit level — see the PayPal item above for what's still unverified)
- [x] Phase 2: UI consolidation, dependency upgrades (React 19/Vite 7/MUI
      9/ESLint 10), media optimization (30MB → ~3MB, PNG → WebP)
- [x] Phase 2 + Phase 3 merged into `phase-2/ui-consolidation` and pushed to
      `origin` — conflicts resolved in favor of Phase 3's SKU-based pricing
      everywhere it touched cart logic, so the old tamperable
      `changeItemOption`/client-set-price path didn't come back

## Later / unscoped
- [ ] Confirm real print turnaround time for the product page copy. Still
      not confirmed by the client — the redesigned PDP shows "7–10 days"
      pulled from each product's own existing copy as a placeholder, with a
      `// TODO` comment in `ProductDetail.tsx` marking it
- [ ] Server-side order persistence (Tier 3 gap, same as 3dVerse)
- [ ] Full WCAG 2.1 AA pass
- [ ] Final launch checklist pass (Tier 0 + Tier 3) on the deployed site

## Done
- [x] Modernization spec produced, phases defined
