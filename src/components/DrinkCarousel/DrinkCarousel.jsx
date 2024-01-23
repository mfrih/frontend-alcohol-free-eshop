import { useState, useEffect } from "react";
import "./DrinkCarousel.css";
import axios from "axios";
const API_URL = "https://backend-alcohol-free-eshop.vercel.app";

function DrinkCarousel() {
  // create a state for the list of featured drinks
  const [featuredDrinks, setFeaturedDrinks] = useState(null);

  // fetch featured drinks
  async function fetchFeaturedDrinks() {
    try {
      const response = await axios.get(`${API_URL}/drinks?featured=true`);
      setFeaturedDrinks(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchFeaturedDrinks();
  }, []);

  if (!featuredDrinks) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Our featured drinks</h2>
      <div>
        {featuredDrinks.map((drink) => {
          return (
            //at somepoint this should be turned into a OneDrinkCard component
            <div key={drink.id}>
              <h4>{drink.name}</h4>
              <p>{drink.brand}</p>
              <p>{drink.category}</p>
              <p>{drink.subcategory}</p>
              <p>{drink.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DrinkCarousel;
