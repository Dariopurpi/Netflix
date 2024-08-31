import { useEffect } from "react";
import "../style/DetailsMovie.css";
import { useActionData, useParams } from "react-router-dom";
import { useState } from "react";

function DetailsMovie() {
  const { ID } = useParams();

  const [data, setData] = useState();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWYwYTQ3NGY3NWRjYjUxNTNjNGZkZjBhY2EwNTc3MCIsIm5iZiI6MTcyNDk0NzgwNC42ODI3NDcsInN1YiI6IjY2ZDA5YzAyMDUwODQ5ZmQzMDAxOTdhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7raYqYWkdF9HwA-AT-NVNFc8K2EOgTytdTXZQ_wV2Vg",
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${ID}?language=en-US`, options)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, []);
  console.log(data);
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
        alt={data?.overview}
      />{" "}
      <h1>{data?.title}</h1>
      <p>{data?.overview}</p>
    </>
  );
}

export default DetailsMovie;
