import "../style/Card.scss";
import { Link } from "react-router-dom";

function Card({ data }) {
  // console.log(data);
  return (
    <Link to={`/${data?.id}`}>
      {data && (
        <div className="card">
          <div className="cardContent">
            <img
              src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
              alt={data?.overview}
            />
            <h3>{data?.title}</h3>
            <h3>{data?.original_name}</h3>
          </div>
        </div>
      )}
    </Link>
  );
}

export default Card;
