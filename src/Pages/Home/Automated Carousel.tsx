import { useState, useEffect } from "react";
import "./Carousel.css"; // Import the CSS file
import logo from "../../assets/Main/logo.png";
import cs1 from "../../assets/Sports/CardStand/cs2.png";
import da1 from "../../assets/DeskToppers/Keychains/k5.png";
import s1 from "../../assets/Stadiums/s1.png";

const images = [
  logo, 
  cs1,
  da1,
  s1
];

export const AutomatedCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <img src={images[index]} alt="Carousel slide" className="carousel-image" />
    </div>
  );
}
