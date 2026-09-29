# Queens Finest Prints Custom Designs E-Commerce Website

## Description
This is an e-commerce website specializing in 3D custom designs, with a focus on city signs, card stands, card holders, and accessories. The website is built using React and React-Bootstrap, offering a sleek and intuitive interface for browsing, customizing, and purchasing unique 3D designs. Secure payment processing is facilitated through PayPal integration.

## Features
- Browse a diverse collection of 3D custom designs, including city signs, card stands, card holders, and accessories.
- Customize designs with options for color, size, and personalization.
- Add items to the shopping cart and securely proceed to checkout using PayPal.
- User-friendly interface optimized for both desktop and mobile devices.
- Integration with React-Bootstrap for responsive design and UI components.

## Technologies Used
- React
- React-Bootstrap
- Firebase 
- MUI 
- React Router Dom 
- PayPal integration

## Future changes:
- Personal Account Dashboards

## Environment Variables
Copy `.env.example` to `.env` and fill in:

- `VITE_PAYPAL_CLIENT_ID` — PayPal REST app client ID (sandbox or live). The client ID is public by design, but keeping it in an env var lets sandbox and production deploys differ without touching source.
- `VITE_FORMSUBMIT_ID` — the random-string alias FormSubmit emails you after you activate `formsubmit.co/<your-email>` once. Using the alias (instead of the plain email) keeps the address from being scraped out of the deployed bundle.
- `PAYPAL_CLIENT_ID` (Netlify Functions only) — PayPal REST app client ID, server-side only.
- `PAYPAL_SECRET` (Netlify Functions only) — PayPal REST app secret. Must never be prefixed `VITE_` or referenced anywhere under `src/`.
- `PAYPAL_ENV` (Netlify Functions only) — `sandbox` or `live`. Selects the PayPal API base URL.

**Netlify:** set all five variables under Site configuration → Environment variables for each deploy context (production vs. any preview/sandbox context) before building.

## Order pricing and payment flow

The browser never determines what a customer is charged. It sends only product/variant SKU ids and quantities; `netlify/functions/create-paypal-order` recomputes the order total from [shared/pricing.ts](shared/pricing.ts) (the single source of truth for the catalog and for NY sales tax/shipping) and creates the PayPal order server-side. `netlify/functions/capture-paypal-order` re-verifies that total against PayPal's own stored order before capturing, so the amount charged can never diverge from the catalog.

## Running Netlify Functions locally

The PayPal buttons call `/.netlify/functions/create-paypal-order` and `/.netlify/functions/capture-paypal-order`, which only exist when served through the Netlify CLI (plain `npm run dev` serves the Vite app alone, without functions).

```bash
npx netlify-cli dev
```

This proxies the Vite dev server and serves the functions from `netlify/functions/` alongside it, using the `PAYPAL_*` values from your local `.env`. Type-check the functions on their own with:

```bash
npm run typecheck:functions
```