import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="nav-items">
        <ol>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact US</li>
          <li>Cart</li>
        </ol>
      </div>
    </div>
  );
};
const approot = ReactDOM.createRoot(document.getElementById("root"));

approot.render(<Header />);
