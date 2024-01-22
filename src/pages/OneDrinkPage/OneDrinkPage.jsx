import { useState, useEffect } from "react";
import "./OneDrinkPage.css";
import { useParams } from "react-router-dom";
import axios from "axios";
const API_URL = "https://backend-alcohol-free-eshop.vercel.app";

function OneDrinkPage() {
  const { drinkId } = useParams();
  const [oneDrink, setOneDrink] = useState(null);

  async function fetchOneDrink() {
    try {
      const response = await axios.get(`${API_URL}/drinks/${drinkId}`);
      setOneDrink(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchOneDrink();
  }, [drinkId]);

  return (
    <div className="OneDrinkPage">
      {oneDrink ? (
        <>
          <h3>{oneDrink.name}</h3>
          <p>{oneDrink.description}</p>
        </>
      ) : (
        <>
          <p>No drink to display</p>
        </>
      )}
    </div>
  );
}

export default OneDrinkPage;
