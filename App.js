import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{id:"parent"},
[
    React.createElement("div",{id:"child1"},
    [React.createElement("h1",{},"I am h1 tag here from child1..."),
    React.createElement("h2",{},"I am h2 tag here from child1...")]
),
React.createElement("div",{id:"child2"},
    [React.createElement("h1",{},"I am h1 tag here from child2..."),
    React.createElement("h2",{},"I am h2 tag here from child2...")],
)],

);
const heading =  React.createElement("h1",{id:"heading"},"Hello World from React!!");

// console.log(heading);//object

const appRoot =  ReactDOM.createRoot(document.getElementById("root"));

appRoot.render(parent);//renders h1 element 