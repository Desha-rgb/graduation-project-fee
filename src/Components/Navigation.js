import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Navigation.css";

function NavigationBar() {
  return (
    <div className="nav-main">
      <nav>
        <ul>
          <li>
            <NavLink to="/" style={HomeLinkStyle} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/update">Update</NavLink>
          </li>
          <li>
            <NavLink to="/features">Features</NavLink>
          </li>
          <li>
            <NavLink to="/status">Status</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

const HomeLinkStyle = {
  margin: "0 700px 0 0",
};

export default NavigationBar;
