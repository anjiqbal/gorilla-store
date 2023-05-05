import React from "react";
import "./Card.css";
import Rating from '@mui/material/Rating';

function Card({ category, title, imageSrc, rating, price }) {
  return (
    <div className="card">
      <div className="card__category">
        <h3>{category}</h3>
      </div>
      <div className="card__image">
        <img src={imageSrc} alt="Callum - King of the Div's" />
      </div>
      <div className="card__title">
        <h3>{title}</h3>
      </div>
      <div className="card__rating">
        <Rating name="half-rating" defaultValue={rating} precision={0.1} />
      </div>
      <div className="card__price">
        <p>£{price}</p>
      </div>
    </div>
  );
}

export default Card;
