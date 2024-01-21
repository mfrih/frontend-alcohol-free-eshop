import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="NavBar">
      <NavLink to="/beers">Beers</NavLink>
      <NavLink to="/wines">Wines</NavLink>
      <NavLink to="/spirits">Spirits</NavLink>
      <NavLink to="/">Logo-Homepage</NavLink>
      <NavLink to="/cocktails">Cocktails</NavLink>
      <NavLink to="/our-philosophy">Our Philosophy</NavLink>
    </nav>
  );
}

export default Navbar;
