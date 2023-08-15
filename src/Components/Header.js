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
    <div className="header shadow-lg shadow-slate-300/50 justify-between flex h-28 items-center">
      <div className="logo-container w-28 ml-4">
        <img
          src="https://www.apnafoodmania.com/logo.png"
          alt="App logo"
          className=" h-24"
        />
      </div>
      <div className="nav-items py-5 px-8">
        <ol className="flex">
          <li className="m-3 p-3 text-base font-medium font-serif">
            <Link to="/">Home</Link>
          </li>
          <li className="m-3 p-3 text-base font-medium font-serif">
            <Link to="/about">About Us</Link>
          </li>
          <li className="m-3 p-3 text-base font-medium font-serif">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="m-3 p-3 text-base font-medium font-serif">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="m-3 p-3 text-base font-medium font-serif">Cart</li>
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
