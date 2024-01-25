import React from "react";
import "./HomePage.css";
import DrinkCarousel from "../../components/DrinkCarousel/DrinkCarousel";

function HomePage() {
  return (
    <div className="HomePage">
      <div className="cover-image">
        <img src="/pexels-denys-gromov-12645208.jpg" alt="" />
        <div className="homepage-tagline">
          <h2>Premium Alcohol-Free Drinks</h2>
          <h3>Healthy and tasty partying has never been easier</h3>
        </div>
      </div>
      <div className="section-content">
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
