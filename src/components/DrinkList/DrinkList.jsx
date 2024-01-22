import React from "react";
import "./DrinkList.css";
import { Link } from "react-router-dom";

function DrinkList({ drinks, drinkCategory }) {
  return (
    <>
      <div>
        {drinks.map((drink) => {
          return (
            <div key={drink.id}>
              <Link to={`/${drinkCategory}/${drink.id}`}>
                <img src={drink.image_url} alt={drink.name} />
                <h3> {drink.name}</h3>
                <p>{drink.brand}</p>
                <p>{drink.price}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default DrinkList;
