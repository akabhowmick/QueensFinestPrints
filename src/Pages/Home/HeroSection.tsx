import "./Home.css";
import { socialButtons } from "../../utils/SocialMediaLink";
import { ItemCarousel } from "./ItemCarousel";
import { AutomatedCarousel } from "./Automated Carousel";

export const HeroSection = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-6 order-2 hero__lead">
            <h2>You dream it</h2>
            <h1>We 3D Print It! </h1>
            <ItemCarousel />
            <button className="btn btn-primary">All Products</button>
          </div>
          <AutomatedCarousel />
        </div>

        <div className="button_right">{socialButtons}</div>
      </div>
    </div>
  );
};
