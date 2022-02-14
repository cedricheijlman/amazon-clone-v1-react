import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
function Header() {
  return (
    <>
      <header className="header">
        <img src="./amazonlogo.png" />
        <div className="search">
          <input />
          <SearchIcon className="searchIcon" />
        </div>
        <div className="header__right">
          <div>
            <p>Hello email@gmail.com</p>
            <h5>Sign Out</h5>
          </div>
          <div>
            <p>Returns</p>
            <h5>& Orders</h5>
          </div>
          <div>
            <p>Your</p>
            <h5>Prime</h5>
          </div>
          <div className="cart">
            <ShoppingCartOutlinedIcon />
            <p>1</p>
          </div>
        </div>
      </header>
      <div>Selection header header</div>
    </>
  );
}

export default Header;