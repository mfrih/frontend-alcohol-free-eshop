import React from "react";
import "./HomePage.css";
import DrinkCarousel from "../../components/DrinkCarousel/DrinkCarousel";

function HomePage() {
  return (
    <div>
      <div className="cover-image">
        <img src="/public/pexels-karolina-grabowska-4021976.jpg" alt="" />
      </div>
      <div>
        <h2>Alcohol free socialising made easy and tasty !</h2>
        <p>
          This is something about how life can still be cool without alcohol
        </p>
      </div>
      <DrinkCarousel />
    </div>
  );
}

export default HomePage;
