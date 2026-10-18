import { Link } from "react-router-dom";
import { LegalPage } from "./LegalPage";
import { LEGAL_UPDATED } from "./legalDates";

export const TermsOfService = () => (
  <LegalPage
    eyebrow="Legal"
    title="Terms of Service"
    intro="The ground rules for ordering custom prints from Queens Finest Prints."
    updated={LEGAL_UPDATED}
    sections={[
      {
        heading: "Agreement",
        body: (
          <p>
            By using queensfinestprints.com or placing an order, you agree to these terms, our{" "}
            <Link to="/privacy">Privacy Policy</Link>, <Link to="/returns">Returns &amp; Refunds</Link>{" "}
            and <Link to="/shipping">Shipping</Link> pages. If you don't agree, please don't order.
          </p>
        ),
      },
      {
        heading: "Custom orders",
        body: (
          <ul>
            <li>Most products are made to order from the photo or logo you send.</li>
            <li>
              After you order we review your image. We may ask for a better photo or suggest a
              different angle.
            </li>
            <li>
              Once the image is suitable we send a rendering of the finished product. We start
              production only after you approve it.
            </li>
            <li>
              Colors, finish and fine detail on a 3D print can differ slightly from screens and
              renderings.
            </li>
          </ul>
        ),
      },
      {
        heading: "Images you upload",
        body: (
          <>
            <p>
              You confirm that you have the right to use any image, logo or design you send us, and
              that it doesn't infringe anyone else's rights. We may decline or cancel an order, with
              a full refund, if we think it does.
            </p>
            <p>
              You keep ownership of your images. You allow us to use them only to model, make and
              deliver your order. We don't publish your images without asking first.
            </p>
          </>
        ),
      },
      {
        heading: "Prices and payment",
        body: (
          <p>
            Prices are in US dollars. Sales tax and shipping are added at checkout, and the total is
            confirmed before you pay. Payment is processed by PayPal. We calculate prices on our
            servers, so a price shown on the page is always checked again when you pay.
          </p>
        ),
      },
      {
        heading: "Timing",
        body: (
          <p>
            Production usually takes several days to a few weeks depending on the item and our
            workload. Estimated dates are estimates, not guarantees. See{" "}
            <Link to="/shipping">Shipping</Link>.
          </p>
        ),
      },
      {
        heading: "Returns",
        body: (
          <p>
            Because every product is personalized, we can't accept returns or give refunds, except
            when there's a production defect. Details are on the{" "}
            <Link to="/returns">Returns &amp; Refunds</Link> page.
          </p>
        ),
      },
      {
        heading: "Trademarks and brands",
        body: (
          <p>
            Team, league and brand names and logos belong to their owners. Our products are
            independent, personalized items for personal collections and aren't made, endorsed or
            licensed by those owners.
          </p>
        ),
      },
      {
        heading: "Our content",
        body: (
          <p>
            The site's text, photos and design belong to Queens Finest Prints. Please don't copy or
            reuse them without asking.
          </p>
        ),
      },
      {
        heading: "Liability",
        body: (
          <p>
            Our products are display pieces for collectibles and aren't toys. To the extent the law
            allows, our liability for any order is limited to the amount you paid for it. Nothing
            here limits rights you have under law that can't be waived.
          </p>
        ),
      },
      {
        heading: "Governing law and changes",
        body: (
          <p>
            These terms are governed by the laws of the State of New York. We may update them from
            time to time; the date at the top shows the latest version, and the version in place
            when you order applies to that order. Questions? Use the{" "}
            <Link to="/contact-us">contact form</Link>.
          </p>
        ),
      },
    ]}
  />
);
