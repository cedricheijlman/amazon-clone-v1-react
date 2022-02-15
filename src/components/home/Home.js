import React, { useContext } from "react";
import { UserContext } from "../../userContext";
import Product from "../product/Product";
import "./home.css";
function Home() {
  const { featuredProducts, setFeaturedProducts } = useContext(UserContext);

  return (
    <div className="home">
      <h2>Featured Items</h2>
      <div className="itemsRow">
        {featuredProducts &&
          featuredProducts.map((product) => {
            return (
              <Product
                stars={product.stars}
                name={product.name}
                key={product.id}
                id={product.id}
                price={product.price}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Home;
