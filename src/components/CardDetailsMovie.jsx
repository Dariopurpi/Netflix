import { useActionData, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../style/CardDetailsMovie.scss";

function CardDetailsMovie() {
  let { ID } = useParams();

  const [dataSingleFilm, setdataSingleFilm] = useState();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWYwYTQ3NGY3NWRjYjUxNTNjNGZkZjBhY2EwNTc3MCIsIm5iZiI6MTcyNDk0NzgwNC42ODI3NDcsInN1YiI6IjY2ZDA5YzAyMDUwODQ5ZmQzMDAxOTdhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7raYqYWkdF9HwA-AT-NVNFc8K2EOgTytdTXZQ_wV2Vg",
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${ID}?language=it-IT`, options)
      .then((response) => response.json())
      .then((response) => setdataSingleFilm(response))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="detailsMovie">
      <img
        src={`https://image.tmdb.org/t/p/w500/${dataSingleFilm?.poster_path}`}
        alt={dataSingleFilm?.overview}
      />
      <h1>{dataSingleFilm?.title}</h1>
      <span className="genres">
        {console.log(dataSingleFilm)}
        <p>{dataSingleFilm?.release_date}</p>
        {dataSingleFilm?.genres.map((item) => (
          <span>{<p key={item.id}>{item.name}</p>}</span>
        ))}
      </span>
      <button id="favourite">Aggiungi ai preferiti</button>
      <p className="detailsMovieDescription">{dataSingleFilm?.overview}</p>
    </div>
  );
}

export default CardDetailsMovie;
