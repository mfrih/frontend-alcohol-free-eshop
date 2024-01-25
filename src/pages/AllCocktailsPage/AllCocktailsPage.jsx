import { useState } from "react";
import "./AllCocktailsPage.css";

function AllCocktailsPage() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <h2>
        Let our wonderful Mocktail Bartender make the perfect cocktail for you!
      </h2>
      <h3>
        "Hi I'm Maria Garita. It's quite easy, just let me know what kind of the
        tastes do you fancy and I'll try and imagine the tastiest alcohol free
        cocktail for you. I promise, you'll find it mind blowing"
      </h3>
      <p>Use the sliders to finetune your cocktail:</p>
      <div className="all-sliders">
        <div className="one-slider">
          <div>
            <label for="sour-sweet">Sourn vs. Sweet</label>
          </div>
          <div>
            <input
              className="slider-input"
              type="range"
              id="sour-sweet"
              name="sour-sweet"
              min="0"
              max="10"
              value={value}
              step="1"
            />
          </div>
          <div>
            <label for="bitter">Bitter</label>
          </div>
          <div>
            <input
              className="slider-input"
              type="range"
              id="bitter"
              name="bitter"
              min="0"
              max="10"
              value={value}
              step="1"
            />
          </div>
          <div>
            <label for="salty">Salty</label>
          </div>
          <div>
            <input
              className="slider-input"
              type="range"
              id="salty"
              name="salty"
              min="0"
              max="10"
              value={value}
              step="1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllCocktailsPage;
