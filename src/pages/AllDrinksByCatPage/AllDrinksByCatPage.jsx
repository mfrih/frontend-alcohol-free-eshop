import React from "react";
import "./AllDrinksByCatPage.css";
import DrinkList from "../../components/DrinkList/DrinkList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const API_URL = "https://backend-alcohol-free-eshop.vercel.app";

function AllDrinksByCatPage() {
  const [drinks, setDrinks] = useState(null);

  const { drinkCategory } = useParams();

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
        <DrinkList drinks={drinks} drinkCategory={drinkCategory} />
      </div>
    </div>
  );
}

export default AllDrinksByCatPage;
