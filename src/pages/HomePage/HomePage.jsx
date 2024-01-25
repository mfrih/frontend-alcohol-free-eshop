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
        <h2>Our Promise: Uncompromised Taste, Zero Alcohol</h2>
        <p>
          At MARIA GARITA, we understand that embracing a healthier lifestyle
          doesn't mean sacrificing the pleasures of a well-crafted drink.
        </p>
        <p>
          Our handpicked collection ensures that you never have to compromise on
          taste or sophistication.
        </p>
        <p>
          We curate the finest selection of premium alcohol-free beverages,
          meticulously chosen to deliver an experience that rivals the allure of
          traditional cocktails.
        </p>
        <p>
          Why settle for sparkling water when you can savor the sensation of a
          meticulously crafted non-alcoholic Old Fashioned or a virgin Mojito?
        </p>
      </div>
      <DrinkCarousel />
    </div>
  );
}

export default HomePage;
