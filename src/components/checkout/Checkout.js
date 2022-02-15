import React, { useContext } from "react";
import { UserContext } from "../../userContext";
import "./checkout.css";

function Checkout() {
  const counts = {};
  const { cart, setCart } = useContext(UserContext);
  cart.forEach((x) => {
    counts[x.id] = (counts[x.id] || 0) + 1;
  });
  console.log(counts);

  cart.filter((cart) => {
    for (let i = 0; i < cart.length; i++) {}
  });

  return (
    <div className="checkout">
      <div>Products</div>
    </div>
  );
}

export default Checkout;
