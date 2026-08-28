import { posterPath, videoPath } from "../../utils/Products";
import "./Home.css";
import { ItemCarousel } from "./ItemCarousel";

export const HeroSection = () => {
  return (
    <div className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        id="hero-video"
        playsInline
        preload="metadata"
        poster={posterPath} // fallback image
      >
        <source src={videoPath} type="video/mp4" />
      </video>

      <div className="container">
        <div className="row">
          <div className="col-md-6 order-2 hero__lead">
            <h1>Custom 3D Prints</h1>
            <ItemCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};
