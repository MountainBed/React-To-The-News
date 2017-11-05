import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          React to the News!
        </Link>
      </div>
      <ul className="nav navbar-nav navbar-right">
        <li
        className={window.location.pathname === "/" ? "active" : ""}
        >
          <Link to="/">Home</Link>
        </li>
        <li
        className={window.location.pathname === "/saved" ? "active" : ""}
        >
          <Link to="/saved">Saved</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
