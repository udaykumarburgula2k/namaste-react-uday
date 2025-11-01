import React from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../utils/constants.js";

const LogoHeader = () => (
    
        <div className="logo-container">
            <img src={LOGO_URL} alt="App Logo" className="logo" />
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