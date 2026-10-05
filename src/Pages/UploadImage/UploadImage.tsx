import "./UploadImage.css";
import { imageUploadFormId, thankYouPage } from "../../utils/ApiKeys";
import { useEffect } from "react";
import { useCartContext } from "../../providers/CartProvider";
import { PageIntro } from "../../Components/PageIntro/PageIntro";

export const UploadImageForm = () => {
  const { setCart } = useCartContext();

  useEffect(() => {
    setCart([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contactFormInput = [
    { name: "Name", label: "from_name" },
    { name: "Email", label: "reply_to" },
    { name: "Phone Number", label: "phone_number" },
    { name: "Order Number", label: "order_number" },
    { name: "Message", label: "message" },
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

  return (
    <div className="upload-page">
      <PageIntro eyebrow="After your order" title="Send us your artwork">
        Upload the logo or photo for your piece. We'll send a design to approve before we print.
      </PageIntro>
      <div className="container">
        <form
          className="form-card upload-form"
          action={imageUploadFormId}
          method="POST"
          encType="multipart/form-data"
        >
          <input type="hidden" name="_next" value={thankYouPage} />
          <input type="text" name="_honey" style={{ display: "none" }} />
          <input
            type="hidden"
            name="_subject"
            value="Customization for Queens Finest Prints order!"
          />
          <input type="hidden" name="_template" value="table" />
          {contactFormInputs}
          <div className="form-field">
            <label htmlFor="Image-for-Customization">Image for customization</label>
            <input
              type="file"
              id="Image-for-Customization"
              name="Image-for-Customization"
              accept="image/png, image/jpeg"
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn-primary btn-block">
              Send to our designers
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
