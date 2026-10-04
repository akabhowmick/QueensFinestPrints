import "./ThankYouPage.css";
import { Link } from "react-router-dom";
import { CropMarks } from "../../Components/CropMarks/CropMarks";

export const ThankYouPage = () => {
  return (
    <section className="status-page container" aria-labelledby="thanks-title">
      <div className="status-page__inner">
        <CropMarks tone="mark" />
        <p className="eyebrow">Order received</p>
        <h1 id="thanks-title">Thank you.</h1>
        <p>
          You'll hear from us soon about your order, the timeline, and anything we need from you.
        </p>
        <div className="status-page__actions">
          <Link to="/" className="btn btn-primary">
            Back to home
          </Link>
          <Link to="/contact-us" className="btn btn-secondary">
            Have a question?
          </Link>
        </div>
      </div>
    </section>
  );
};
