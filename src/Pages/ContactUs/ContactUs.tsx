import { socialButtons } from "../../utils/SocialMediaLink";
import { ContactForm } from "./ContactForm";

export const ContactUs = () => {
  const socialMediaButtons = socialButtons.map((button, index) => {
    return <div key={index}>{button}</div>;
  });

  return (
    <div className="contact-page">
      <h1 className="page-header">Contact Us!</h1>
      <div className="form-container-with-social">
        <div className="social-container">
          <p className="social-container-intro">
            Fill out the contact and we will reach out to you as soon as possible! Come check out on our other social media pages!</p>
          <div className="contact-links">{socialMediaButtons}</div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};
