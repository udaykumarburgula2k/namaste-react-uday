import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import  restaurantList  from "../utils/mockData.js";

// const filterData = (searchText, restaurantList) => {
// 	console.log("Top Rated Clicked")
// 	return restaurantList.filter((restaurant) =>
// 		newRestaurantList = restaurantList?.filter(restaurant => restaurant.info.avgRating > 4)
// 	);
// }

const Body = () => {

		let newRestaurantList = restaurantList;
		

		return  (
			<div style={{backgroundColor: "#8080F0"}}>
				<div className="search-bar">Search</div>
				<div className="filter-btn-toprated">
					<button onClick={()=> {
						console.log("Top Rated Clicked");
						newRestaurantList = restaurantList?.filter(restaurant => restaurant.info.avgRating > 4);
						console.log(newRestaurantList);

					} }>Top Rated Restaurants</button>
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