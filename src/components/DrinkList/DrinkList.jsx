import React from "react";
import "./DrinkList.css";
import { Link } from "react-router-dom";
import OneDrinkCard from "../OneDrinkCard/OneDrinkCard";

function DrinkList({ drinks, drinkCategory }) {
  return (
    <>
      <div>
        {drinks.map((drink) => {
          return (
            <div key={drink.id}>
              <OneDrinkCard drink={drink} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default DrinkList;
