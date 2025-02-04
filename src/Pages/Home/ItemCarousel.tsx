import "./Home.css";

const itemNames = [
  "Custom Single Card Stands",
  "Custom 3-Card Stands",
  "Custom 6-Card Stands",
  "Custom Replica Stadiums",
  "Box Organizers",
  "City Skylines",
];

export const ItemCarousel = () => {
  return (
    <div className="scrolling-words-container">
      <span>You can buy custom: </span>
      <div className="scrolling-words-box">
        <ul>
          {itemNames.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
