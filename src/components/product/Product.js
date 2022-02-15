import React, { useContext } from "react";
import "./product.css";
import StarIcon from "@mui/icons-material/Star";
import { UserContext } from "../../userContext";
function Product({ name, stars, price, id }) {
  const { cart, setCart } = useContext(UserContext);
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
      <button onClick={() => setCart([...cart, { id }])}>Add to Cart</button>
    </div>
  );
}

export default Product;
