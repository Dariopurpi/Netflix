import Card from "./Card";
import { Link } from "react-router-dom";
import "../style/CardCarousel.scss";

function CardsCarousel({ data, sectionTitle }) {
  return (
    <>
      <div className="cardCarousel">
        <h2>{sectionTitle}</h2>
        <div className="cardContainer">
          {data?.map((item) => (
            <Card data={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default CardsCarousel;
