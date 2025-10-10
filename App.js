import React from "react";
import ReactDOM from "react-dom/client";

/*
* 
*  <div id="parent">
*      <div id="child">
*          <h1>I am h1 tag</h1> 
*          <h2>I am h2 tag</h2>
*      </div>
*    <div id="child2">
*          <h1>I am h1 tag</h1> 
*          <h2>I am h2 tag</h2>
*      </div>
*  </div>
*   
*/

const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I am h1 tag.123"),
        React.createElement("h2", {}, "I am h2 tag")]
    ),
    React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")]
    )
]);

console.log(parent); // prints object - react element object

// React element object => HTML (using ReactDOM which browser understands)

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // react object converted to html and displayed inside root div
    


// const heading = React.createElement("h1",
//     {
//         id: "heading",
//         myOwnElementType: "h1"
//     },
//     "Hello World! from React");
//     console.log(heading); // prints object
// var root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // react object converted to html and displayed inside root div

// React.createElement() => Object => HTML (using ReactDOM)

// JSX - JavaScript XML
