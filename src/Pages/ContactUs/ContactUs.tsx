import "./Contact.css";
import { socialButtons } from "../../utils/SocialMediaLink";
import { ContactForm } from "./ContactForm";
import { PageIntro } from "../../Components/PageIntro/PageIntro";

export const ContactUs = () => {
  return (
    <div className="contact-page">
      <PageIntro eyebrow="Contact" title="Start a custom order">
        Tell us what you have in mind and we'll get back to you, usually within a day.
      </PageIntro>
      <div className="container contact-layout">
        <aside className="contact-aside">
          <h2>Prefer to browse first?</h2>
          <p>
            See more of our work, or buy through Etsy and eBay, on our other pages.
          </p>
          <div className="contact-social">{socialButtons}</div>
        </aside>
        <ContactForm />
      </div>
    </div>
  );
};
