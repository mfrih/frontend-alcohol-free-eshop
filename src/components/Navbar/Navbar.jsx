import React from "react";
import "./Navbar.css";
import { NavLink, Outlet } from "react-router-dom";
const homePageNav = {
  position: "absolute",
  backgroundColor: "transparent",
};
const commonNav = {
  position: "static",
  backgroundColor: "white",
  color: "black",
};
function Navbar({ style = "common" }) {
  return (
    <>
      <nav
        className="NavBar"
        style={style === "common" ? commonNav : homePageNav}
      >
        <NavLink to="/beers">Beers</NavLink>
        <NavLink to="/wines">Wines</NavLink>
        <NavLink to="/spirits">Spirits</NavLink>
        <NavLink to="/">
          <img className="logo-image" src="/public/logo1.png" alt="" />
        </NavLink>
        <NavLink to="/cocktails">Cocktails</NavLink>
        <NavLink to="/our-philosophy">Our Philosophy</NavLink>
        <NavLink to="/admin">🎛️</NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
