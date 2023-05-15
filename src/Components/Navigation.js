import React from "react";

function NavigationBar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#login">Login</a>
        </li>
        <li>
          <a href="#update">Update</a>
        </li>
        <li>
          <a href="#temperature">Temperature</a>
        </li>
        <li>
          <a href="#status">Status</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
