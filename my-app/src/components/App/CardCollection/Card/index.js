import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <div className="card__category">
        <h3>men's clothing</h3>
      </div>
      <div className="card__image">
        <img
          src="https://t4.ftcdn.net/jpg/05/65/55/03/360_F_565550367_1dT0Pc6mghKERU7utRfm7IbwaTilDgOB.jpg"
          alt="Callum - King of the Div's"
        />
      </div>
      <div className="card__title">
        <h3>Backpack</h3>
      </div>
      <div className="card__rating">
        <p>*****</p>
      </div>
      <div className="card__price">
        <p>£55.55</p>
      </div>
    </div>
  );
}

export default Card;
