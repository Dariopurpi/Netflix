import Card from "./Card";
import { Link } from "react-router-dom";
import "../style/CardCarousel.css";

function CardsCarousel({ data, sectionTitle }) {
  return (
    <>
      <div className="cardCarousel">
        <h2>{sectionTitle}</h2>
        <div className="cardContainer">
          {data?.map((item) => (
            <Link>
              <Card item={item} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default CardsCarousel;
