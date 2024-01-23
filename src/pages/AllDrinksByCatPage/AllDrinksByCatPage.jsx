import React from "react";
import "./AllDrinksByCatPage.css";
import DrinkList from "../../components/DrinkList/DrinkList";
import SubCategoryList from "../../components/SubCategoryList/SubCategoryList";
import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
const API_URL = "https://backend-alcohol-free-eshop.vercel.app";

function AllDrinksByCatPage() {
  const [drinks, setDrinks] = useState(null);
  const { drinkCategory } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("subcategory");

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

  let displayedDrinks = drinks;
  if (filter) {
    displayedDrinks = drinks.filter((drink) => {
      return drink.subcategory === filter;
    });
  }

  return (
    <div>
      <h2>Choose from all our drinks</h2>
      <div className="SubCategoryList">
        <SubCategoryList
          uniqueSubCategories={uniqueSubCategories}
          setSearchParams={setSearchParams}
        />
      </div>
      <div>
        <DrinkList drinks={displayedDrinks} drinkCategory={drinkCategory} />
      </div>
    </div>
  );
}

export default AllDrinksByCatPage;
