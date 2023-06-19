import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";

const FoodApp = () => {
  return (
    <div className="foodapp">
      <Header />
      <Body />
    </div>
  );
};
const approot = ReactDOM.createRoot(document.getElementById("root"));

approot.render(<FoodApp />);
