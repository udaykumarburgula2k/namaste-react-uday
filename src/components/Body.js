import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import  restaurantList  from "../utils/mockData.js";

const Body = () => {

		let newRestaurantList = [];
		newRestaurantList = restaurantList.filter(restaurant => restaurant.info.avgRating > 4);

		return  (
			<div style={{backgroundColor: "#8080F0"}}>
				<div className="search-bar">Search</div>
				<div className="filter-btn-toprated">
					<button onClick={()=> console.log("Top Rated Clicked")}>Top Rated Restaurants</button>
				</div>
				<div className="rest-container">
				{
					newRestaurantList.map((restaurant) => 
						(
							<RestaurantCard key={restaurant.info.id} resData={restaurant} ></RestaurantCard>
						)
					)
					
				}
				</div>
			</div>
		);
}

export default Body;