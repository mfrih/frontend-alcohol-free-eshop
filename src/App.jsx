import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import AllDrinksByCatPage from "./pages/AllDrinksByCatPage/AllDrinksByCatPage";
import AllCocktailsPage from "./pages/AllCocktailsPage/AllCocktailsPage";
import OneDrinkPage from "./pages/OneDrinkPage/OneDrinkPage";
import OneCocktailPage from "./pages/OneCocktailPage/OneCocktailPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import AllDrinksAdminPage from "./pages/AllDrinksAdminPage/AllDrinksAdminPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:drinkCategory" element={<AllDrinksByCatPage />} />
        {/* <Route
          path="/wines"
          element={<AllDrinksByCatPage drinkCategory="wines" />}
        />
        <Route
          path="/spirits"
          element={<AllDrinksByCatPage drinkCategory="spirits" />} 
        /> */}
        <Route path="/:drinkCategory/:drinkId" element={<OneDrinkPage />} />
        <Route path="/cocktails" element={<AllCocktailsPage />}>
          <Route path=":cocktailId" element={<OneCocktailPage />} />
        </Route>
        <Route path="/our-philosophy" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/admin" element={<AllDrinksAdminPage />} />
      </Routes>
    </>
  );
}

export default App;
