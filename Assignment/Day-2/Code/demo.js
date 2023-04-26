import React from "react";
import ReactDOM from "react-dom/client";

//React Functional Component
const Heading = () => {
  return (
    <div id="container">
      <h1 className="heading-container">
        Namaste React🚩 functional Component
      </h1>
      ;
    </div>
  );
};

//React Element
const Title = (
  <>
    <Heading />
    <h1 id="headingjsx" className="headingclass">
      Namaste React❤👀 React Element
    </h1>
  </>
);
const approot = ReactDOM.createRoot(document.getElementById("root"));

approot.render(Title);
