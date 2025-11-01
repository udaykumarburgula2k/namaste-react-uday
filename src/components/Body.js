import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import  restaurantList  from "../utils/mockData.js";

const Body = () => 
(
    <div style={{backgroundColor: "#8080F0"}}>
        <div className="search-bar">Search</div>
        <div className="rest-container">
		{
			restaurantList.map((restaurant) => 
				(
					<RestaurantCard key={restaurant.info.id} resData={restaurant} ></RestaurantCard>
				)
			)
			
		}
            
            
        </div>
    </div>
);

export default Body;