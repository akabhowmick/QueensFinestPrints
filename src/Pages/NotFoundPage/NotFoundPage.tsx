import "../ThankYouPage/ThankYouPage.css";
import { Link } from "react-router-dom";
import { CropMarks } from "../../Components/CropMarks/CropMarks";

export const NotFoundPage = () => {
  return (
    <section className="status-page container" aria-labelledby="not-found-title">
      <div className="status-page__inner">
        <CropMarks />
        <p className="eyebrow">Error 404</p>
        <h1 id="not-found-title">This page is off the press.</h1>
        <p>
          We couldn't find what you were looking for. It may have moved, or the address may have a
          typo.
        </p>
        <div className="status-page__actions">
          <Link to="/" className="btn btn-primary">
            Back to home
          </Link>
          <Link to="/all" className="btn btn-secondary">
            Shop all products
          </Link>
        </div>
      </div>
    </section>
  );
};
