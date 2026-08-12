// Paypal information
export const paypalClientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;

// Email form
// FormSubmit alias id (obtained by activating https://formsubmit.co/<email> once and
// swapping in the random-string alias it emails back) so the plain address never ships in the bundle.
const formSubmitId = import.meta.env.VITE_FORMSUBMIT_ID;
export const contactFormId = `https://formsubmit.co/${formSubmitId}`;
export const imageUploadFormId = `https://formsubmit.co/${formSubmitId}`;
export const orderReviewFormId = `https://formsubmit.co/${formSubmitId}`;

// Website Links
export const uploadImagePage = "https://www.queensfinestprints.com/upload-image";
export const thankYouPage = "https://www.queensfinestprints.com/thanks";
