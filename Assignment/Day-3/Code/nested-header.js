// To run this file, Change path of src in root div in index.html file

import React from "react";
import ReactDOM from "react-dom/client";

//React Functional Component
const Heading = () => (
  <div id="container">
    <h1 className="heading-container">Namaste React🚩 functional Component</h1>;
  </div>
);

//Composition of components
const Title = (
  <>
    <Heading />
    <h1 id="headingjsx" className="headingclass">
      Namaste React❤👀 React Element
    </h1>
  </>
);

//using React.createElement
const header1 = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "I am h1 using React.createElement"),
  React.createElement("h2", {}, "I am h2 using React.createElement"),
  React.createElement("h3", {}, "I am h3 tag from React.createElement"),
]);

//creating element using JSX
const header = (
  <div className="title">
    <h1>I am h1 using JSX</h1>
    <h2>I am h2 using JSX</h2>
    <h3>I am h3 using JSX</h3>
  </div>
);

//functional component
const Header = () => (
  <div className="title">
    <h1>I am h1 using JSX</h1>
    <h2>I am h2 using JSX</h2>
    <h3>I am h3 using JSX</h3>
  </div>
);

const rootHeader = ReactDOM.createRoot(document.getElementById("root"));
rootHeader.render(Title);
