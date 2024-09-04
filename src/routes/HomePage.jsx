import { useState, useEffect } from "react";
import "../style/HomePage.scss";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import CardsCarousel from "../components/CardsCarousel";

function App() {
  const [data, setData] = useState([]);

  const [dataToRender, setDataToRender] = useState([]);
  const [dataToRenderSerie, setDataToRenderSerie] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWYwYTQ3NGY3NWRjYjUxNTNjNGZkZjBhY2EwNTc3MCIsIm5iZiI6MTcyNDk0NzgwNC42ODI3NDcsInN1YiI6IjY2ZDA5YzAyMDUwODQ5ZmQzMDAxOTdhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7raYqYWkdF9HwA-AT-NVNFc8K2EOgTytdTXZQ_wV2Vg",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=it-IT&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setDataToRender(response.results))
      .catch((err) => console.error(err));

    const optionsSerie = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWYwYTQ3NGY3NWRjYjUxNTNjNGZkZjBhY2EwNTc3MCIsIm5iZiI6MTcyNDk0NzgwNC42ODI3NDcsInN1YiI6IjY2ZDA5YzAyMDUwODQ5ZmQzMDAxOTdhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7raYqYWkdF9HwA-AT-NVNFc8K2EOgTytdTXZQ_wV2Vg",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/tv/popular?language=it-IT&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setDataToRenderSerie(response.results))
      .catch((err) => console.error(err));
  }, []);
  console.log(dataToRender);
  return (
    <>
      <Navbar data={dataToRender} />
      <Banner />
      <CardsCarousel data={dataToRender} sectionTitle="film da vedere" />
      <CardsCarousel data={dataToRenderSerie} sectionTitle="nuove serie tv" />
    </>
  );
}

export default App;
