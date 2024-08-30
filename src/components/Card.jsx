import { useState, useEffect } from "react";
import "./Card.css";

function Card({ data, sectionTitle }) {
  return (
    <>
      <div className="cardWrap">
        <h2>{sectionTitle}</h2>
        <div className="card">
          {data?.map((item) => (
            <div className="cardContent">
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt={item.overview}
              />
              <h3>{item.title}</h3>
              <h3>{item.original_name}</h3>
              {/* <p>{item.overview}</p> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Card;
