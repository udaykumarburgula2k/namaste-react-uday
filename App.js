import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => 
(
    <div className="header">
        <div className="logo-container">
            <img src="https://avatars.githubusercontent.com/u/16599609?s=48&v=4" alt="App Logo" className="logo" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);

const AppLayout = () => (
    <div className="app">
        Hi!! Welcome to React Application.
        <Header></Header>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />); // render funcational component to the page.
// React element object converted to HTML and displayed inside root div


