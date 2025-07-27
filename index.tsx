import React from "react";

export default function Home() {
  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
        Global Buyers, Meet Real Turkish Manufacturers
      </h1>
      <p style={{ marginTop: "10px", color: "#555" }}>
        A verified B2B marketplace for products made only in Türkiye.
      </p>
      <div style={{ marginTop: "20px" }}>
        <button style={{ marginRight: "10px", padding: "10px 20px", background: "black", color: "white", borderRadius: "5px" }}>
          Browse Products
        </button>
        <button style={{ padding: "10px 20px", border: "1px solid black", borderRadius: "5px" }}>
          Apply as a Supplier
        </button>
      </div>
    </div>
  );
}
