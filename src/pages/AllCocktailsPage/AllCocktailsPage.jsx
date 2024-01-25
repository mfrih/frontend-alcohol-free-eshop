import React, { useState } from "react";
import "./AllCocktailsPage.css";
import Slider from "../../components/Slider/Slider";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAIKEY,
  dangerouslyAllowBrowser: true,
});

function AllCocktailsPage() {
  const [sourSweetValue, setSourSweetValue] = useState(0);
  const [bitterValue, setBitterValue] = useState(0);
  const [saltyValue, setSaltyValue] = useState(0);
  const [spicyValue, setSpicyValue] = useState(0);
  const [fruityValue, setFruityValue] = useState(0);

  const handleSourSweetChange = (e) => {
    setSourSweetValue(e.target.value);
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
        sourVSsweet: sourSweetValue,
        bitter: bitterValue,
        salty: saltyValue,
        spicy: spicyValue,
        fruity: fruityValue,
      };

      const assistant = await openai.beta.assistants.retrieve(
        "asst_99IpTFCLwFOe8DZ1SvxVoBHl"
      );
      console.log(assistant);
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: assistant.instructions,
          },
          { role: "user", content: JSON.stringify(messageForAssistant) },
        ],
        model: "gpt-4",
        response_format: { type: "json_object" },
      });

      console.log(completion.choices[0]);
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
        <Slider
          label="sourVSsweet"
          value={sourSweetValue}
          onChange={handleSourSweetChange}
        />
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
      <section></section>
    </div>
  );
}

export default AllCocktailsPage;
