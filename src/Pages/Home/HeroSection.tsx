import { Link } from "react-router-dom";
import { posterPath, videoPath } from "../../utils/Products";
import { CropMarks } from "../../Components/CropMarks/CropMarks";
import { usePrefersReducedMotion } from "../../utils/usePrefersReducedMotion";

export const HeroSection = () => {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero__copy">
        <p className="eyebrow">Custom 3D printing · Queens, NY</p>
        <div className="hero__headline">
          <CropMarks />
          <h1 id="hero-title">Display the cards you're proudest of.</h1>
        </div>
        <p className="hero__lede">
          Card stands, display holders and replica stadiums, printed to order with your name, team
          or logo.
        </p>
        <div className="hero__actions">
          <Link to="/card-stands" className="btn btn-primary">
            Shop card stands
          </Link>
          <Link to="/contact-us" className="btn btn-secondary">
            Start a custom order
          </Link>
        </div>
      </div>

      <div className="hero__media">
        {reduceMotion ? (
          <img src={posterPath} alt="" width={720} height={900} />
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={posterPath}
            aria-hidden="true"
          >
            <source src={videoPath} type="video/mp4" />
          </video>
        )}
        <span className="hero__caption">On the printer in Queens</span>
      </div>
    </section>
  );
};
