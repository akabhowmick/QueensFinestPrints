import { contactFormId } from "../../utils/ApiKeys";
import "./Contact.css";

export const ContactForm = () => {
  const contactFormInput = [
    { name: "Name", label: "from_name" },
    { name: "Email", label: "reply_to" },
    { name: "Phone Number", label: "phone_number" },
    { name: "Message", label: "message" },
  ];

  const contactFormInputs = contactFormInput.map(({ name, label }) => {
    return (
      <div key={name} className="contact-form-div">
        <label htmlFor={label}>{name}</label>
        <input
          className="contact-form-input"
          id={label}
          name={label}
          type="text"
          autoComplete="off"
          placeholder={`Your ${name}`}
          required
        />
      </div>
    );
  });

  const productOptions = [
    "Custom Single Card Stands",
    "Custom 3-Card Stands",
    "Custom 6-Card Stands",
    "Custom Replica Stadiums",
    "Custom Bleacher Stands",
    "Box Organizers",
    "City Skylines",
  ];

  const selectClasses = (
    <div className="contact-form-div">
      <label htmlFor="design_of_interest">Class Of Interest</label>
      <select className="contact-form-input" id="design_of_interest" name="design_of_interest">
        {productOptions.map((className) => {
          return <option key={className} value={className} label={className}></option>;
        })}
      </select>
    </div>
  );

  return (
    <form action={contactFormId} method="POST">
      <div className="contact__form-container">
        <input type="text" name="_honey" style={{ display: "none" }} />
        <input type="hidden" name="_subject" value="Inquiry for Queens Finest Prints!" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_redirect" value="https://queensfinestprints.com/" />
        {contactFormInputs}
        {selectClasses}
        <div className="submit-btn-container">
          <button id="contact-submit-btn" type="submit" className="btn btn-primary">
            Send Email
          </button>
        </div>
      </div>
    </form>
  );
};
