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

**Netlify:** set both variables under Site configuration → Environment variables for each deploy context (production vs. any preview/sandbox context) before building.