import { contactFormId } from "../../utils/ApiKeys";

export const ContactForm = () => {
  const contactFormInput = [
    { name: "Name", label: "from_name" },
    { name: "Email", label: "reply_to" },
    { name: "Phone Number", label: "phone_number" },
  ];

  const contactFormInputs = contactFormInput.map(({ name, label }) => {
    return (
      <div key={name} className="form-field">
        <label htmlFor={label}>{name}</label>
        <input
          id={label}
          name={label}
          type="text"
          autoComplete="off"
          placeholder={`Your ${name.toLowerCase()}`}
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

  return (
    <form action={contactFormId} method="POST" className="form-card">
      <input type="text" name="_honey" style={{ display: "none" }} />
      <input type="hidden" name="_subject" value="Inquiry for Queens Finest Prints!" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value="https://queensfinestprints.com/" />
      {contactFormInputs}
      <div className="form-field">
        <label htmlFor="design_of_interest">What are you interested in?</label>
        <select id="design_of_interest" name="design_of_interest">
          {productOptions.map((className) => {
            return (
              <option key={className} value={className}>
                {className}
              </option>
            );
          })}
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us about your idea: player, team, colors, logo…"
          required
        />
      </div>
      <div className="form-actions">
        <button type="submit" className="btn btn-primary btn-block">
          Send message
        </button>
      </div>
    </form>
  );
};
