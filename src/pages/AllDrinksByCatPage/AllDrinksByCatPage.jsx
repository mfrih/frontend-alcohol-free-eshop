import React from "react";
import "./AllDrinksByCatPage.css";
import DrinkList from "../../components/DrinkList/DrinkList";
import { useState, useEffect } from "react";
import axios from "axios";
const API_URL = "http://localhost:3000";

function AllDrinksByCatPage({ drinkCategory }) {
  const [drinks, setDrinks] = useState(null);

  async function fetchAllDrinks() {
    try {
      const response = await axios.get(
        `${API_URL}/drinks?category=${drinkCategory}`
      );
      console.log(response);
      setDrinks(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchAllDrinks();
  }, [drinkCategory]);

  if (!drinks) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Choose from all our drinks</h2>
      <h3>{drinkCategory}</h3>
      <div>
        <DrinkList drinks={drinks} />
      </div>
    </div>
  );
}

export default AllDrinksByCatPage;
