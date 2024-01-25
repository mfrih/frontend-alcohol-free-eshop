import React, { useState } from "react";
import "./AllCocktailsPage.css";
import Slider from "../../components/Slider/Slider";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAIKEY,
  dangerouslyAllowBrowser: true,
});

function AllCocktailsPage() {
  const [sweetValue, setSweetValue] = useState(7);
  const [bitterValue, setBitterValue] = useState(5);
  const [saltyValue, setSaltyValue] = useState(0);
  const [spicyValue, setSpicyValue] = useState(0);
  const [fruityValue, setFruityValue] = useState(0);
  const [cocktail, setCocktail] = useState(null);

  const handleSweetChange = (e) => {
    setSweetValue(e.target.value);
  };

  const handleBitterChange = (e) => {
    setBitterValue(e.target.value);
  };

  const handleSaltyChange = (e) => {
    setSaltyValue(e.target.value);
  };

  const handleSpicyChange = (e) => {
    setSpicyValue(e.target.value);
  };

  const handleFruityChange = (e) => {
    setFruityValue(e.target.value);
  };

  async function handleCocktailGeneration() {
    try {
      const messageForAssistant = {
        sweet: sweetValue,
        bitter: bitterValue,
        salty: saltyValue,
        spicy: spicyValue,
        fruity: fruityValue,
      };

      const assistant = await openai.beta.assistants.retrieve(
        "asst_99IpTFCLwFOe8DZ1SvxVoBHl"
      );

      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: assistant.instructions,
          },
          { role: "user", content: JSON.stringify(messageForAssistant) },
        ],
        model: "gpt-3.5-turbo-1106",
        response_format: { type: "json_object" },
      });

      console.log(completion);

      const returnedCocktail = JSON.parse(
        completion.choices[0].message.content
      );
      // console.log(returnedCocktail);
      setCocktail(returnedCocktail);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h2>
        Let our wonderful Mocktail Bartender make the perfect cocktail for you!
      </h2>
      <h3>
        "Hi I'm Maria Garita. It's quite easy, just let me know what kind the
        tastes you fancy and I'll try and imagine the tastiest alcohol free
        cocktail for you. I promise, you'll find it mind blowing"
      </h3>
      <p>Use the sliders to finetune your cocktail:</p>
      <div className="all-sliders">
        <Slider label="sweet" value={sweetValue} onChange={handleSweetChange} />
        <Slider
          label="bitter"
          value={bitterValue}
          onChange={handleBitterChange}
        />
        <Slider label="salty" value={saltyValue} onChange={handleSaltyChange} />
        <Slider label="spicy" value={spicyValue} onChange={handleSpicyChange} />
        <Slider
          label="fruity"
          value={fruityValue}
          onChange={handleFruityChange}
        />
      </div>
      <button onClick={handleCocktailGeneration}>
        Hey Maria, Generate my mocktail !
      </button>
      {cocktail && (
        <section className="cocktail">
          <h3>{cocktail.name}</h3>
          <h4>Ingredients</h4>
          <ul>
            {cocktail.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h4>Instructions</h4>
          <ol>
            {cocktail.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
          <p>{cocktail.endSentence}</p>
        </section>
      )}
    </div>
  );
}

export default AllCocktailsPage;
