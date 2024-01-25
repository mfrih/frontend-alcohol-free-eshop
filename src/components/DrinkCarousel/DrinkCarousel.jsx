import { useState, useEffect } from "react";
import "./DrinkCarousel.css";
import OneDrinkCard from "../OneDrinkCard/OneDrinkCard";
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
    <div className="DrinkCarousel">
      <h2>Our featured drinks</h2>
      <div className="card-container">
        {featuredDrinks.map((drink) => (
          <OneDrinkCard key={drink.id} drink={drink} />
        ))}
      </div>
    </div>
  );
}

export default DrinkCarousel;
