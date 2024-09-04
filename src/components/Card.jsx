import "../style/Card.scss";
import { Link } from "react-router-dom";

function Card({ data }) {
  // console.log(data);
  return (
    <div className="card">
      <Link to={`/${data?.id}`}>
        <span className="cardContent">
          <img
            src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
            alt={data?.overview}
          />
          <h3>{data?.title}</h3>
          <h3>{data?.original_name}</h3>
        </span>
      </Link>
    </div>
  );
}

export default Card;
