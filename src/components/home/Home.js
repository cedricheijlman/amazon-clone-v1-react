import React from "react";
import Product from "../product/Product";
import "./home.css";
function Home() {
  return (
    <div className="home">
      <h2>Featured Items</h2>
      <div className="itemsRow">
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default Home;
