import React from "react";
import { Link } from "react-router-dom";

function Terms() {
  return (
    <div style={{ 
      padding: "50px", 
      backgroundColor: "#f0f0f0", 
      minHeight: "100vh",
      color: "black"
    }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Terms of Service</h1>
      <p style={{ fontSize: "20px", marginBottom: "20px" }}>
        This is the terms page. If you can see this, routing is working!
      </p>
      <Link 
        to="/" 
        style={{ 
          color: "blue", 
          fontSize: "18px", 
          textDecoration: "underline" 
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default Terms;