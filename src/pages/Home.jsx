import React from "react";
import ProductList from "../components/ProductList";
import ".//Home.css";

function Home() {
  return (
    <div>
      <div className="hero">
        <div className="container">
          <h5>Welcome to</h5>
          <h1 className="hero-title">FakeStore</h1>
        </div>
      </div>
      <ProductList />
    </div>
  );
}

export default Home;
