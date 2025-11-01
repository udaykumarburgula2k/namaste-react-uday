import React from "react";
import ReactDOM from "react-dom/client";


/* 
AppLayout
    - Header
        - Logo
        - Nav Items
    - Body
        - Search Bar
        - Restaurant List
        - Restaurant Card
    - Footer
*/

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



/* 
const restaurantCardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
    width: "200px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9"
};

<div style={restaurantCardStyle} ></div 
*/

const RestaurantCard = (props) => {
  /* props */
  console.log(props);

   return (
        <div className="rest-card" >
            <img className="rest-logo"
            src="https://www.reshot.com/preview-assets/icons/ZLG4EM73QR/cooking-on-stove-ZLG4EM73QR.svg" 
            alt="Fav restaurant" />
            <h3>{props.resName}</h3>
            <p>{props.rating}</p>
            <p>{props.cuisine}</p>
            <p>{props.minTime}</p>
        </div>
    );
}

const Body = () => 
(
    <div style={{backgroundColor: "#8080F0"}}>
        <div className="search-bar">Search</div>
        <div className="rest-container">
            <RestaurantCard resName="subway" cuisine="veg delite,sallad,fastfood" rating="4.5" minTime="30 mins" />
            <RestaurantCard resName="kfc" cuisine="chicken,fastfood" rating="4.0" minTime="30 mins"  />
            <RestaurantCard resName="domino" cuisine="pizza,fastfood" rating="4.2" minTime="30 mins"  />
        </div>
    </div>
);

const AppLayout = () => (
    <div className="app">
        <Header></Header>
        <Body></Body>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />); // render funcational component to the page.
// React element object converted to HTML and displayed inside root div


