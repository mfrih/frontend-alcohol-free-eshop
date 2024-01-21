import React from "react";
import "./DrinkList.css";

function DrinkList({ drinks }) {
  return (
    <>
      <div>
        {drinks.map((drink) => {
          return (
            <div key={drink.id}>
              <img src={drink.image_url} alt={drink.name} />
              <h3> {drink.name}</h3>
              <p>{drink.brand}</p>
              <p>{drink.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default DrinkList;
