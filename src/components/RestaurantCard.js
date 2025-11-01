import React from "react";
import ReactDOM from "react-dom/client";
import { RESTAURANT_IMAGE_URL } from "../utils/constants.js";

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
    // method #1 props passed as parameter
  /* props */
   console.log(props);
  // method #2 destructuring props object
  const {resData} = props; // destructuring props object
  const {name, locality, cuisines, avgRating, cloudinaryImageId} = resData?.info; // destructuring resData object
  console.log(resData);
  // method #3 destructuring in parameter
   return (
        <div className="rest-card" >
            <img className="rest-logo"
            src={RESTAURANT_IMAGE_URL + cloudinaryImageId} 
            alt="Fav restaurant" />
            <h3>{name}, {locality}</h3>
            <p className="cuisines" title={cuisines.join(", ")}>{cuisines.join(", ")}</p>
            <p>{avgRating}</p>
        </div>
    );
}

export default RestaurantCard;