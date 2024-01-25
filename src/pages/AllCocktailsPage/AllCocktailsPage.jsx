import React from "react";
import "./AllCocktailsPage.css";

function AllCocktailsPage() {
  return (
    <div>
      <h2>
        Let our wonderful Mocktail Bartender make the perfect cocktail for you!
      </h2>
      <h3>
        "Hi I'm Mary Garita. It's quite easy, just let me know what kind the
        tastes you fancy and I'll try and imagine the tastiest alcohol free
        cocktail for you. I promise, you'll find it mind blowing"
      </h3>
      <p>Use the sliders to finetune your cocktail:</p>
      <div className="all-sliders">
        <div className="one-slider">
          <div>
            <label for="sourness">Sourness vs. Sweetness</label>
          </div>
          <div>
            <input
              className="slider-input"
              type="range"
              id="sourness"
              name="sourness"
              min="0"
              max="10"
              // value="5"
              step="1"
              list="sour-markers"
            />
            <datalist className="datalist" id="sour-markers">
              <option value="0" label="very sour!"></option>
              <option value="1"></option>
              <option value="2"></option>
              <option value="3"></option>
              <option value="4"></option>
              <option value="5"></option>
              <option value="6"></option>
              <option value="7"></option>
              <option value="8"></option>
              <option value="9"></option>
              <option value="10" label="very sweet!"></option>
            </datalist>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllCocktailsPage;
