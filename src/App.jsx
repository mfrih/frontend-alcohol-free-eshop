import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import AllDrinksByCatPage from "./pages/AllDrinksByCatPage/AllDrinksByCatPage";
import AllCocktailsPage from "./pages/AllCocktailsPage/AllCocktailsPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import OneDrinkPage from "./pages/OneDrinkPage/OneDrinkPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/beers"
          element={<AllDrinksByCatPage drinkCategory="beer" />}
        >
          <Route path=":drinkId" element={<OneDrinkPage />} />
        </Route>
        <Route
          path="/wines"
          element={<AllDrinksByCatPage drinkCategory="wine" />}
        >
          <Route path=":drinkId" element={<OneDrinkPage />} />
        </Route>
        <Route
          path="/spirits"
          element={<AllDrinksByCatPage drinkCategory="spirit" />}
        >
          <Route path=":drinkId" element={<OneDrinkPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/our-philosophy" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
