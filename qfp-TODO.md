# QueensFinestPrints TODO

Tracks outstanding work. Update as items land.

## Urgent (live security exposure)
- [x] Phase 3: server-side price authority. Branch `phase-3/server-payments`
      (5 commits, branched off Phase 1 tip). QFP had the same variant-pricing
      wrinkle as 3dVerse (cardStand/keyChain bulk packs, CLStadium/GCStadium
      options) — flattened into per-SKU IDs in `shared/pricing.ts`, same two
      Netlify Functions, same tamper tests (all pass: injected price/amount
      fields, negative/fractional quantity, unknown SKU, split-quantity cap
      bypass, method-not-allowed, double-capture idempotency). Build,
      typecheck:functions, and lint all clean; no PAYPAL_SECRET in src/ or
      dist/. **Not yet verified:** a real sandbox end-to-end purchase — no
      PayPal sandbox credentials were available in this session (see
      "Client / external" below). Once credentials exist, run `netlify-cli
      dev` locally and do one real sandbox checkout before merging/deploying.
- [x] Phase 1: correctness, accessibility, and quick security wins per the
      modernization spec (commit df13e7c)

## After Phases 1 and 3 land
- [ ] Phase 2 equivalent: UI consolidation, responsiveness, image
      optimization, dependency upgrades, Lighthouse pass to 90+/95+.
      In progress, uncommitted, on `phase-2/ui-consolidation` (branched
      before Phase 3 existed) — merge or rebase Phase 3's pricing/checkout
      commits into it before landing, since both touched CartProvider,
      Products.ts, CartItem.tsx, ButtonWrapper.tsx, Payment.tsx, Review.tsx,
      Checkout.tsx, and tsconfig.json.
- [ ] Phase 4: premium redesign, run `qfp-phase-4-design.md` with Claude Code
      (branch `phase-4/premium-redesign`). Must not start before Phases 1
      and 3, checkout UI would be restyled twice otherwise
- [ ] Confirm real print turnaround time for the product page copy

## Client / external
- [ ] PayPal credentials: confirm who owns the QFP PayPal account and get
      sandbox + live Client ID and Secret (same drill as 3dVerse)
- [ ] Netlify env vars set with `PAYPAL_ENV` scoped per deploy context

## Later / unscoped
- [ ] Server-side order persistence (Tier 3 gap, same as 3dVerse)
- [ ] Full WCAG 2.1 AA pass
- [ ] Final launch checklist pass (Tier 0 + Tier 3) on the deployed site

## Done
- [x] Modernization spec produced, phases defined
