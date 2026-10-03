# Phase 0 Baseline — 2026-08-11

Recorded against `main` @ commit `cd421c2` before any modernization work.

## `npm ci && npm run build`

Build succeeded (`vite v5.1.5`, 1216 modules transformed, built in 2.53s).

Key output sizes (gzip where reported):

| Asset | Size |
|---|---|
| `dist/assets/index-*.js` (main bundle) | 684.17 kB (gzip 213.69 kB) |
| `dist/assets/index-*.css` | 31.30 kB (gzip 6.77 kB) |
| `dist/assets/main-*.mp4` (hero video) | 8,755.80 kB |
| `dist/index.html` | 2.03 kB (gzip 0.90 kB) |
| Total `dist/assets` PNG images | ~30 individual product/hero PNGs, several >500KB, four >1MB (`b1`, `cs1`, `s1`, `s3`) |

Vite warns that the main JS chunk exceeds the 500kB guideline (no code-splitting yet). This is the number Phase 2's bundle-size gate must beat.

## `npm run lint`

**Fails** under the `--max-warnings 0` policy — not a regression, pre-existing:

- `src/Components/CheckoutProcess/Payment/ButtonWrapper.tsx:28` — `react-hooks/exhaustive-deps` (missing `dispatch`, `options`)
- `src/providers/UserProvider.tsx:35` — `react-refresh/only-export-components`

Both are pre-existing and unrelated to the Phase 1 scope items; noting here so later phases don't mistake them for new regressions. Should be cleaned up opportunistically.

## Screenshots

`docs/screenshots/baseline/` — home, card-stands, product-description (`/products/1`), cart, checkout, contact-us, upload-image, each at 375px and 1280px (14 files total), captured via Playwright against `vite preview`.
