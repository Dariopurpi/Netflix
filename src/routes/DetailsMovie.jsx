import { useEffect } from "react";
import "../style/DetailsMovie.scss";
import { useActionData, useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import CardDetailsMovie from "../components/CardDetailsMovie";

function DetailsMovie() {
  let { ID } = useParams();

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

    fetch(`https://api.themoviedb.org/3/movie/${ID}?language=it-IT`, options)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, []);
  // console.log(data);
  return (
    <>
      <Navbar />
      <CardDetailsMovie dataSingleFilm={data} />
    </>
  );
}

export default DetailsMovie;
