import { useState, useEffect } from "react";
import "./Carousel.css"; // Import the CSS file
import logo from "../../assets/Main/logo.png";
import cs1 from "../../assets/Sports/CardStand/cs2.png";
import da1 from "../../assets/DeskToppers/Keychains/k5.png";
import s1 from "../../assets/Stadiums/s1.png";

const images = [
  { src: logo, alt: "Queens Finest Prints logo" },
  { src: cs1, alt: "Custom card stand" },
  { src: da1, alt: "Custom keychain" },
  { src: s1, alt: "Custom replica stadium" },
];

export const AutomatedCarousel = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="carousel-container">
      <img src={images[index].src} alt={images[index].alt} className="carousel-image" />
      <button
        type="button"
        className="carousel-pause-btn"
        onClick={() => setIsPaused((prev) => !prev)}
        aria-label={isPaused ? "Play carousel" : "Pause carousel"}
      >
        {isPaused ? "▶" : "❚❚"}
      </button>
    </div>
  );
}
