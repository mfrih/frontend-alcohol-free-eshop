import React from "react";
import "./AllDrinksAdminPage.css";
import { useState, useEffect } from "react";
import axios from "axios";
const API_URL = "https://backend-alcohol-free-eshop.vercel.app";

function AllDrinksAdminPage() {
  const [drinks, setAllDrinks] = useState(null);

  async function fetchAllDrinksData() {
    try {
      const response = await axios.get(`${API_URL}/drinks`);
      setAllDrinks(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function updateFeaturedState(drink) {
    try {
      const drinkToUpdate = { ...drink, featured: !drink.featured };
      const response = await axios.put(
        `${API_URL}/drinks/${drink.id}`,
        drinkToUpdate
      );
      fetchAllDrinksData();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchAllDrinksData();
  }, []);

  if (!drinks) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Manage all your drinks</h2>
      <h3>
        This page let's you decide whether a drink should be featured on the
        Homepage or New
      </h3>
      <div>
        {drinks.map((drink) => {
          return (
            // at somepoint this should be turned into a OneDrinkAdminCard component
            <div key={drink.id}>
              <h4>{drink.name}</h4>
              <p>{drink.brand}</p>
              <p>{drink.category}</p>
              <p>{drink.subcategory}</p>
              <p>
                <label htmlFor="featured">To be featured on the Hompage?</label>
                <input
                  type="checkbox"
                  id="featured"
                  checked={drink.featured || false}
                  onChange={() => updateFeaturedState(drink)}
                />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllDrinksAdminPage;
