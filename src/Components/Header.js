import Logo from "../utils/img/appLogo.png";
import { useState } from "react";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={Logo} alt="App logo" className="logo" />
      </div>
      <div className="nav-items">
        <ol>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact US</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnNameReact === "Logout"
                ? setbtnNameReact("Login")
                : setbtnNameReact("Logout");
            }}
          >
            {btnNameReact}
          </button>
        </ol>
      </div>
    </div>
  );
};

export default Header;
