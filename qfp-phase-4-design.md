# QueensFinestPrints Phase 4: Premium storefront redesign

## Context
React + TypeScript e-commerce site for a Queens NYC print shop. IMPORTANT:
this phase must not start until Phase 1 (correctness/security quick wins) and
Phase 3 (server-side payment authority) have landed, since restyling checkout
UI before the payment flow is rebuilt means doing the work twice. Visual
design only: do not touch payment logic, pricing, or form handling.

## Design direction: ink on paper
The brand is a working print shop. The design should feel like the thing they
sell: crisp ink on good paper stock. Editorial and confident, but not a
broadsheet-newspaper pastiche. No hairline-rule newspaper columns, no
zero-radius austerity for its own sake.

### Committed palette (do not substitute)
- `--paper`: #FCFBF7 (page background)
- `--surface`: #FFFFFF (cards, panels)
- `--ink`: #101014 (headings, primary text)
- `--muted`: #5C5F66 (secondary text)
- `--accent`: #0087B8 (process cyan, actions and links, used sparingly)
- `--mark`: #C81E5B (process magenta, tiny doses only: badges, sale tags,
  the signature marks below. Never for body text or large fills)

Every text/background pair 4.5:1 minimum, 3:1 for large text and UI borders.

### Committed typography (do not substitute)
- Display: Fraunces 600, optical size axis high, for headings and product names
- Body: Archivo 400/500
- Utility: Archivo 600 uppercase with letter-spacing for eyebrows and labels

Google Fonts, non-render-blocking load pattern, subset and preload.

### Signature element: registration marks
Printers use crop and registration marks to align plates. Use small corner
crop marks as the one decorative device: on product card corners (appearing
on hover), framing the hero headline, and marking section starts. Thin ink
strokes with the occasional --mark magenta one. Implement in CSS/SVG. This is
the single aesthetic risk. Everything else stays disciplined.

## Scope of work

### 1. Product cards
- No visible borders or drop shadows. Whitespace separates cards.
- Fixed aspect-ratio image area with a consistent paper-toned backdrop
  behind every product photo.
- Hover: crop marks draw in at the four corners, image scales to 1.02
  (image only). Respect prefers-reduced-motion.
- Name in Fraunces 600, price in Archivo, visually quieter than the name.

### 2. Product detail page
- Desktop: gallery left, sticky info column right so the buy button never
  scrolls away. Single column mobile with the button reachable early.
- Product name as the one large typographic moment in Fraunces.
- Options and quantities as tactile buttons, never native selects. Selected
  state not conveyed by color alone.
- Specs (sizes, paper stock, finishes) as a clean two-column definition list
  with thin dividers.
- Turnaround line under the buy button ("Printed in Queens. Ready in X
  days.", TODO comment if the real turnaround is unknown).

### 3. Cart
- Slide-out drawer from the right, existing cart page kept as fallback route.
- Line items: 80px thumbnail, name, options, minus/count/plus quantity
  stepper, line total. Generous row spacing.
- Order summary panel with subtotal, tax, shipping, grand total as the
  single largest number. Values must come from wherever Phase 3 established
  price authority, display only, no recomputation in the component.
- Empty state: one line of copy plus links to two top categories.
- Drawer traps focus, closes on Escape, returns focus to trigger.

### 4. Global
- Apply palette and type across nav, footer, contact, and any static pages
  so nothing is left in the old default look.
- Buttons: one primary (ink background, paper text), one secondary (ink
  outline). Accent cyan reserved for links and active states.
- Visible focus rings everywhere, never removed.
- Distinct from 3dVerse: this site shares layout patterns with 3dVerse
  Phase 4 (borderless cards, sticky buy column, drawer cart) but must not
  share its palette, typefaces, or signature motif. If any 3dVerse token
  names or values leak in, that is a bug.

## Verification
1. Build clean, no type errors.
2. Lighthouse mobile on Home and a product page: Performance 90+,
   Accessibility 95+.
3. Keyboard-only pass: drawer, option selection, nav.
4. 360px and 1440px check on every route, zero horizontal overflow.
5. prefers-reduced-motion check.
6. Screenshot every redesigned view and include in the report.

## Workflow
Branch `phase-4/premium-redesign`. Commit in logical units. No PR without
explicit go-ahead.
