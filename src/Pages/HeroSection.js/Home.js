import React from "react";
import { Link } from "react-router-dom";
import heroImage from "./hero-image.jpg"; // Import the hero image

function Home() {
  return (
    <section
      style={{
        padding: "60px 0",
        textAlign: "center",
        color: "#333333",
      }}
    >
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              flex: 1,
              textAlign: "left",
            }}
          >
            <h1
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Upgrade Your Car with Cutting-Edge IoT Technology
            </h1>
            <p
              style={{
                fontSize: "18px",
                marginBottom: "40px",
              }}
            >
              Experience the Future of Automotive Connectivity
            </p>
            <Link
              to="/temperature"
              style={{
                display: "inline-block",
                padding: "12px 24px",
                fontSize: "16px",
                fontWeight: "bold",
                textDecoration: "none",
                backgroundColor: "#337ab7",
                color: "#ffffff",
                borderRadius: "4px",
                transition: "background-color 0.3s",
              }}
            >
              Discover More
            </Link>
          </div>
          <div
            style={{
              flex: 1,
              textAlign: "right",
            }}
          >
            <img
              src={heroImage}
              alt="Hero"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
