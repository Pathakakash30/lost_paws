import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div className="main">
      <div className="menu-button">
        <div className="dandi"></div>
        <div className="dandi"></div>
        <div className="dandi"></div>
      </div>
      <h1>Lost Paws</h1>

      <ul>
        <NavLink
          to="/"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "white",
            };
          }}
        >
          <li>Home</li>
        </NavLink>

        <NavLink
          to="/addpost"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "white",
            };
          }}
        >
          {" "}
          <li>Add Post</li>
        </NavLink>

        <NavLink
          to="/login"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "white",
            };
          }}
        >
          {" "}
          <li>Login/Register</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
