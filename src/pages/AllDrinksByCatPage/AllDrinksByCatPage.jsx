import React from "react";
import "./AllDrinksByCatPage.css";
import DrinkList from "../../components/DrinkList/DrinkList";
import SubCategoryList from "../../components/SubCategoryList/SubCategoryList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const API_URL = "https://backend-alcohol-free-eshop.vercel.app";

function AllDrinksByCatPage() {
  const [drinks, setDrinks] = useState(null);
  const [subCategories, setSubCategories] = useState(null);

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

  const uniqueSubCategories = [
    ...new Set(drinks.map((drink) => drink.subcategory)),
  ];
  console.log(uniqueSubCategories);

  return (
    <div>
      <h2>Choose from all our drinks</h2>
      <div className="SubCategoryList">
        <SubCategoryList uniqueSubCategories={uniqueSubCategories} />
      </div>
      <div>
        <DrinkList drinks={drinks} drinkCategory={drinkCategory} />
      </div>
    </div>
  );
}

export default AllDrinksByCatPage;
