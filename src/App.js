import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import { UserContext } from "./userContext";
import { useEffect, useState } from "react";
import Checkout from "./components/checkout/Checkout";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const [featuredProducts, setFeaturedProducts] = useState([
    { id: 1, name: "This Is Product 1", stars: 3, price: "$333.55" },
    { id: 2, name: "This Is Product 2", stars: 5, price: "$13.99" },
    { id: 3, name: "This is Product 3", stars: 2, price: "$28.90" },
  ]);

  return (
    <UserContext.Provider
      value={{ featuredProducts, setFeaturedProducts, cart, setCart }}
    >
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
