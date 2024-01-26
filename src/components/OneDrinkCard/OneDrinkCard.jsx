import React from "react";
import "./OneDrinkCard.css";
import { Link } from "react-router-dom";

function OneDrinkCard({ drink }) {
  return (
    <Link to={`/${drink.category}/${drink.id}`} className="OneDrinkCard">
      <div className="image-wrapper">
        <img src={drink.image_url} alt={drink.name} />
      </div>
      <h4>{drink.name}</h4>
      <p>{drink.brand}</p>
      <p>{drink.subcategory}</p>
      <p>{drink.price}</p>
      <button>Add to Cart</button>
    </Link>
  );
}

export default OneDrinkCard;
