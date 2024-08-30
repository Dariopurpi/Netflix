import "./Banner.css";
function Banner() {
  return (
    <div className="container">
      <div className="banner">
        <img
          className="bannerImg"
          src="https://image.tmdb.org/t/p/w500/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg"
          alt="Image Banner"
        />
        <div className="buttonWrap">
          <button className="play">riproduci</button>
          <button className="myList">la mia lista</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
