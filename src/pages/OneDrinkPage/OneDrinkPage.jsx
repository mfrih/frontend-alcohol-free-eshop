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
        <div className="drink-container">
          <div className="drink-image-wrapper">
            <img src={oneDrink.image_url} alt={oneDrink.name} />
          </div>
          <div class="drink-content-wrapper">
            <h3>{oneDrink.name}</h3>
            <h4>{oneDrink.subcategory}</h4>
            <p>{oneDrink.description}</p>
            <p>{oneDrink.price}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      ) : (
        <>
          <p>No drink to display</p>
        </>
      )}
    </div>
  );
}

export default OneDrinkPage;
