import { Link } from "react-router-dom";
import { LegalPage } from "./LegalPage";
import { LEGAL_UPDATED } from "./legalDates";

export const ReturnsPolicy = () => (
  <LegalPage
    eyebrow="Legal"
    title="Returns & Refunds"
    intro="Every piece is made to order for you, so here is how we handle problems."
    updated={LEGAL_UPDATED}
    sections={[
      {
        heading: "Custom products",
        body: (
          <p>
            Our custom products are personalized to your preferences, so unfortunately we are
            unable to accept returns or offer refunds. You approve a rendering before we start
            production, so please check it carefully.
          </p>
        ),
      },
      {
        heading: "Production defects",
        body: (
          <p>
            If there is a production defect, please contact us and we'll be happy to provide a free
            replacement. To help us sort it out quickly, include your order number and a clear
            photo of the problem.
          </p>
        ),
      },
      {
        heading: "Damaged in transit",
        body: (
          <p>
            If your order arrives damaged, contact us as soon as you can with your order number and
            photos of the item and its packaging.
          </p>
        ),
      },
      {
        heading: "Before production starts",
        body: (
          <p>
            If you need to change or cancel an order, get in touch as early as possible. If we
            haven't started production we'll do our best to help; once work has started on a custom
            piece it can't be cancelled.
          </p>
        ),
      },
      {
        heading: "Contact",
        body: (
          <p>
            Reach us through the <Link to="/contact-us">contact form</Link>.
          </p>
        ),
      },
    ]}
  />
);
