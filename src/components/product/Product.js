import React from "react";
import "./product.css";
import StarIcon from "@mui/icons-material/Star";
function Product({ name, stars, price }) {
  return (
    <div className="product">
      <h3>{name && name}</h3>
      <p>{price && price}</p>
      <div className="stars">
        {stars &&
          [...Array(stars)].map((e) => {
            return <StarIcon />;
          })}
      </div>
      <img src="logo192.png" />
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
