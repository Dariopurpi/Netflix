import { useState, useEffect } from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <Link to={`/${item.id}`}>
      <div className="card">
        <div className="cardContent">
          <img
            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            alt={item.overview}
          />
          <h3>{item.title}</h3>
          <h3>{item.original_name}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;
