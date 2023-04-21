import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo-2.png";
import icon from "./user-icon.png";

const Header = () => (
  <header className="header">
    <>
      <div id="company-logo">
        <img src={logo} alt="logo image" className="logo"></img>
      </div>
      <div id="user-profile">
        <img
          src={icon}
          alt="user icon"
          height="100"
          width="100"
          className="user-icon"
        ></img>
      </div>
      <div id="search-items">
        <input type="search" className="searchItem" placeholder="Search" />
      </div>
    </>
  </header>
);

const rootData = ReactDOM.createRoot(document.getElementById("root"));

rootData.render(<Header />);
