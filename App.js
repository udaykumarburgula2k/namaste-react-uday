import React from "react";
import ReactDOM from "react-dom/client";


// React element - smallest building block of React app, it is not HTML element.
// React element is an object when we render it using ReactDOM it becomes HTML element

// const heading = React.createElement("h1", { id: "heading" }, "Nameste React--");


// JSX - JavaScript XML (HTML like syntax inside JavaScript)
const jsxHeading = <h1 id="jsx-heading">Nameste JSX--</h1>;

console.log(jsxHeading); // This will log a React element object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading); // React element object converted to HTML and displayed inside root div


