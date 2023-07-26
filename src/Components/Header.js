import Logo from "../utils/img/food-logo.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  console.log("Header called");
  // 3 scenarios of useEffect()
  // useEffect(() => {
  // console.log("use effect called when dependency is btnNameReact");
  // }, [btnNameReact]);

  // useEffect(() => {
  // console.log("use effect called without dependency");
  // });

  useEffect(() => {
    console.log("use effect called when dependency is empty=[]");
  }, []);

  return (
    <div className="header">
      <div className="logo-container">
        <img src={Logo} alt="App logo" className="logo" />
      </div>
      <div className="nav-items">
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
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
