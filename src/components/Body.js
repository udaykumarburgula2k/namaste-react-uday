import React, {useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import  restaurantList  from "../utils/mockData.js";


const Body = () => {

	    // useState variable
		const [newRestaurantList, setNewRestaurantList] = useState(
		restaurantList
		);
		
		// normal variable
		// let newRestaurantList = restaurantList;
		useEffect(() => {
			console.log("useEffect called----------");
		}, []);  

		console.log("Body Rendered");

		return  (
			<div style={{backgroundColor: "#8080F0"}}>
				<div className="search-bar">Search</div>
				<div className="filter-btn-toprated">
					<button onClick={
						()=> 
						{
							console.log("Top Rated Clicked");
							const filteredNewRestaurantList = 
							restaurantList?.filter(restaurant => restaurant.info.avgRating > 4);
							//	filtering logic
							setNewRestaurantList(filteredNewRestaurantList); 
							// React way of updating UI
							// console.log(newRestaurantList);

						} 
					}>Top Rated Restaurants</button>
				</div>
				<div className="rest-container">
				{
					newRestaurantList?.map((restaurant) => 
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