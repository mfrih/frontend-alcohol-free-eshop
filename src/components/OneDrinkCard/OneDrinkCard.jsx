import React from "react";
import "./OneDrinkCard.css";
import { Link } from "react-router-dom";

function OneDrinkCard({ drink }) {
  return (
    <article className="OneDrinkCard">
      <Link to={`/${drink.category}/${drink.id}`}>
        <div className="image-wrapper">
          <img src={drink.image_url} alt={drink.name} />
        </div>
        <h4>{drink.name}</h4>
        <p>{drink.brand}</p>
        <p>{drink.subcategory}</p>
        <p>{drink.price}</p>
      </Link>

      <button>Add to Cart</button>
    </article>
  );
}

export default OneDrinkCard;
