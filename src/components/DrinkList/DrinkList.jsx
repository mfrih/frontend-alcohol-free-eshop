import React from "react";
import "./DrinkList.css";
import { Link } from "react-router-dom";
import OneDrinkCard from "../OneDrinkCard/OneDrinkCard";

function DrinkList({ drinks, drinkCategory }) {
  return (
    <div className="cards-container">
      {drinks.map((drink) => {
        return <OneDrinkCard key={drink.id} drink={drink} />;
      })}
    </div>
  );
}

export default DrinkList;
