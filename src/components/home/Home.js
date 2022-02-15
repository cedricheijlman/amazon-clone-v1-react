import React from "react";
import Product from "../product/Product";
import "./home.css";
function Home() {
  let products = [
    { id: 1, name: "This Is Product 1", stars: 3, price: "$333.55" },
    { id: 2, name: "This Is Product 2", stars: 5, price: "$13.99" },
    { id: 3, name: "This is Product 3", stars: 2, price: "$28.90" },
  ];

  return (
    <div className="home">
      <h2>Featured Items</h2>
      <div className="itemsRow">
        {products &&
          products.map((product) => {
            return (
              <Product
                stars={product.stars}
                name={product.name}
                key={product.id}
                price={product.price}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Home;
