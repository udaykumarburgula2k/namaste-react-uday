import React from "react";
import ReactDOM from "react-dom/client";


// React element - smallest building block of React app, it is not HTML element.
// React element is an object when we render it using ReactDOM it becomes HTML element

const heading = React.createElement("h1", { id: "heading" }, "Nameste React--");


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // React element object converted to HTML and displayed inside root div


