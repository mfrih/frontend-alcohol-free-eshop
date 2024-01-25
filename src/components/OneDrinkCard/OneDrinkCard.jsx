import React from "react";
import "./OneDrinkCard.css";

function OneDrinkCard({ drink }) {
  return (
    <div className="OneDrinkCard">
      <div className="image-wrapper">
        <img src={drink.image_url} alt={drink.name} />
      </div>
      <h4>{drink.name}</h4>
      <p>{drink.brand}</p>
      <p>{drink.subcategory}</p>
      <p>{drink.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default OneDrinkCard;
