import { Link } from "react-router-dom";
import { LegalPage } from "./LegalPage";
import { LEGAL_UPDATED } from "./legalDates";

export const ShippingPolicy = () => (
  <LegalPage
    eyebrow="Legal"
    title="Shipping"
    intro="How long orders take, what shipping costs, and what happens after you order."
    updated={LEGAL_UPDATED}
    sections={[
      {
        heading: "From order to doorstep",
        body: (
          <ul>
            <li>You place your order and send us your photo or logo.</li>
            <li>We review it and may ask for a better image.</li>
            <li>We send a rendering for your approval.</li>
            <li>After you approve, we print, finish and check your piece by hand in Queens, NY.</li>
            <li>We ship it to the address you gave at checkout.</li>
          </ul>
        ),
      },
      {
        heading: "Production time",
        body: (
          <p>
            Production typically takes several days to weeks, starting from the moment you approve
            the rendering. Check the estimated delivery date shown when you order. Delays in
            sending a usable image or approving the rendering move the date back.
          </p>
        ),
      },
      {
        heading: "Cost",
        body: (
          <p>
            Shipping is a flat $5.00 per order, and New York sales tax is added at checkout. You see
            the full total before you pay.
          </p>
        ),
      },
      {
        heading: "Address accuracy",
        body: (
          <p>
            Please double-check your address. If a package is returned because of an incorrect
            address, we'll contact you about reshipping, which may cost extra.
          </p>
        ),
      },
      {
        heading: "Questions",
        body: (
          <p>
            Ask about an order through the <Link to="/contact-us">contact form</Link>. See also{" "}
            <Link to="/returns">Returns &amp; Refunds</Link>.
          </p>
        ),
      },
    ]}
  />
);
