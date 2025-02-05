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
        poster="src/assets/Main/poster.jpeg" // fallback image
      >
        <source src="src/assets/Main/main.mp4" type="video/mp4" />
      </video>

      <div 
        className="container" 
        style={{
          backgroundImage: 'url(src/assets/Main/background.jpg)', // background image
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="row">
          <div className="col-md-6 order-2 hero__lead">
            <h2>You dream it</h2>
            <h1>We 3D Print It!</h1>
            <ItemCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};