import { useState, useEffect } from "react";
import "../style/HomePage.css";
// import Filter from "./components/Filter";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import CardsCarousel from "../components/CardsCarousel";

function App() {
  const [data, setData] = useState([]);
  const [option, setOption] = useState("all");
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
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response.results))
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
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setDataToRenderSerie(response.results))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (option === "all") {
      setDataToRender(data);
    } else {
      setDataToRender(data.filter((item) => item.category === option));
    }
    console.log(data);
  }, [option, data]);

  return (
    <>
      <Navbar />
      <Banner />
      {/* <Filter
        data={data}
        setOption={(optionFromChild) => setOption(optionFromChild)}
      /> */}
      <CardsCarousel data={dataToRender} sectionTitle="film da vedere" />

      <CardsCarousel data={dataToRenderSerie} sectionTitle="nuove serie tv" />
    </>
  );
}

export default App;
