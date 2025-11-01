import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
// import RestaurantCard  from "./components/RestaurantCard.js";


const AppLayout = () => (
    <div className="app">
        <Header></Header>
        <Body></Body>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />); // render funcational component to the page.
// React element object converted to HTML and displayed inside root div