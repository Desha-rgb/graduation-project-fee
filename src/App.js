import "./App.css";
import React from "react";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NavigationBar from "./Components/Navigation";
import LoginPage from "./Pages/Login";
import SignupPage from "./Pages/Signup";
import Update from "./Pages/Update";
import HomePage from "./Pages/HeroSection.js/Home";
import StatusPage from "./Pages/Status";
import Temperature from "./Pages/Temperature";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavigationBar />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "update",
        element: <Update />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "status",
        element: <StatusPage />,
      },
      {
        path: "temperature",
        element: <Temperature />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <NavigationBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/update" element={<Update />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Router> */}

      {/* <Update />
      <br />
      <br /> */}
    </div>
  );
}

export default App;
