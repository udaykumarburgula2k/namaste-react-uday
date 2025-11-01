import React from "react";
import ReactDOM from "react-dom/client";

const LogoHeader = () => (
    
        <div className="logo-container">
            <img src="https://avatars.githubusercontent.com/u/16599609?s=48&v=4" alt="App Logo" className="logo" />
        </div>
    
);

const NavItems = () =>
(
    <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
);

const Header = () => 
(
   <div className="header">
        <LogoHeader />
        <NavItems />
    </div>
);

export default Header;