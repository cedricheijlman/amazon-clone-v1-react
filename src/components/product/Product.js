import React from "react";
import "./product.css";

function Product() {
  return (
    <div className="product">
      <h3>Title Product</h3>
      <p>$339.99</p>
      <div>Stars</div>
      <img src="logo192.png" />
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
