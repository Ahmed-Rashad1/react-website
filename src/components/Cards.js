import React from "react";
import CardItem from "./CardItem";
import "./Card.css";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
            src="/images/img-1.jpeg"
              text="Eplore the hidden waterfall deep inside the amazon jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
            src="/images/img-2.jpg"
              text="Eplore the hidden waterfall deep inside the amazon jungle"
              label="Adventure"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
            src="/images/img-3.jpg"
              text="Eplore the hidden waterfall deep inside the amazon jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
            src="/images/img-4.jpg"
              text="Eplore the hidden waterfall deep inside the amazon jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
            src="/images/img-5.jpg"
              text="Eplore the hidden waterfall deep inside the amazon jungle"
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
