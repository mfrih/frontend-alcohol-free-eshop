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

      const copy = structuredClone(drinks);
      const updatedDrinkList = copy.map((drink) => {
        if (drink.id !== drinkToUpdate.id) {
          return drink;
        } else {
          return drinkToUpdate;
        }
      });
      setAllDrinks(updatedDrinkList);
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
    <div className="AllDrinksAdminPage">
      <h2>Manage all your drinks</h2>
      <h3>
        ❗️As an admin of Maria-Garita's website, this page let's you decide
        whether a drink should be featured on the Homepage.
      </h3>
      <div>
        {drinks.map((drink) => {
          return (
            <div className="drink-admin-card" key={drink.id}>
              <h4>{drink.name}</h4>
              <p>{drink.subcategory}</p>
              <p>
                <input
                  type="checkbox"
                  id="featured"
                  checked={drink.featured ?? false}
                  onChange={() => updateFeaturedState(drink)}
                />
                <label htmlFor="featured">To be featured on the Hompage?</label>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllDrinksAdminPage;
