import { Link } from "react-router-dom";
import { LegalPage } from "./LegalPage";
import { LEGAL_UPDATED } from "./legalDates";

export const PrivacyPolicy = () => (
  <LegalPage
    eyebrow="Legal"
    title="Privacy Policy"
    intro="What we collect when you order or get in touch, who handles it, and how to reach us about it."
    updated={LEGAL_UPDATED}
    sections={[
      {
        heading: "Who we are",
        body: (
          <p>
            Queens Finest Prints is a small business in Queens, NY that prints custom card stands,
            displays and replicas to order. This policy covers queensfinestprints.com. To ask
            anything about it, use our <Link to="/contact-us">contact form</Link>.
          </p>
        ),
      },
      {
        heading: "What we collect",
        body: (
          <ul>
            <li>
              <strong>Order details:</strong> your name, email address, phone number and shipping
              address, plus what you ordered and the total.
            </li>
            <li>
              <strong>Contact messages:</strong> whatever you put in the contact form.
            </li>
            <li>
              <strong>Photos and images:</strong> any logo or photo you send so we can model your
              custom product.
            </li>
            <li>
              <strong>Payment details:</strong> we never see or store your card or PayPal login.
              Payment is taken entirely by PayPal.
            </li>
          </ul>
        ),
      },
      {
        heading: "How we use it",
        body: (
          <p>
            We use your information to make and ship your order, to send you a rendering to
            approve, to answer your messages, and to keep records of past orders. We don't sell
            your information and we don't send marketing email you haven't asked for.
          </p>
        ),
      },
      {
        heading: "Who else handles it",
        body: (
          <>
            <p>We rely on a few services to run the shop. Each receives only what it needs:</p>
            <ul>
              <li>
                <strong>PayPal</strong> processes payment. Its{" "}
                <a href="https://www.paypal.com/privacy" target="_blank" rel="noopener noreferrer">
                  privacy statement
                </a>{" "}
                applies to what you enter there.
              </li>
              <li>
                <strong>FormSubmit</strong> delivers checkout, contact and image-upload forms to our
                inbox by email.
              </li>
              <li>
                <strong>Google Forms</strong> receives photos if you choose to upload them through
                our Google form.
              </li>
              <li>
                <strong>Netlify</strong> hosts the website and runs the code that creates and
                confirms PayPal orders. Like any host, it keeps standard server logs.
              </li>
              <li>
                <strong>Google Fonts</strong> serves the site's typefaces, so your browser contacts
                Google when a page loads.
              </li>
            </ul>
            <p>
              Links to Etsy, eBay and our social accounts leave this site. Their own policies apply
              there.
            </p>
          </>
        ),
      },
      {
        heading: "Cookies and local storage",
        body: (
          <p>
            We don't use advertising or analytics cookies. Your cart is saved in your browser's
            local storage so it survives a page refresh. It stays on your device and is cleared
            after 20 minutes of inactivity or when you finish an order. PayPal may set
            its own cookies when you reach the payment step.
          </p>
        ),
      },
      {
        heading: "How long we keep it",
        body: (
          <p>
            We keep order emails and uploaded photos for as long as we need them to fulfil the
            order, handle any replacement or question about it, and meet tax and record-keeping
            obligations. Contact messages are kept until the conversation is finished.
          </p>
        ),
      },
      {
        heading: "Your choices",
        body: (
          <p>
            You can ask us what we hold about you, ask us to correct it, or ask us to delete it
            (except records we're required to keep) by writing to us through the{" "}
            <Link to="/contact-us">contact form</Link>. You can clear your saved cart at any time
            by emptying it or clearing your browser's site data.
          </p>
        ),
      },
      {
        heading: "Children",
        body: (
          <p>
            The shop is meant for adults. We don't knowingly collect information from children
            under 13. If a child's details reach us, tell us and we'll delete them.
          </p>
        ),
      },
      {
        heading: "Changes",
        body: (
          <p>
            If we change how we handle your information we'll update this page and the date at the
            top.
          </p>
        ),
      },
    ]}
  />
);
