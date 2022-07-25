import React from "react"
import RestaurantIndexItem from "./restaurant_index_item"

const RestaurantIndex = ({ restaurants }) => {
    console.log(restaurants);
    return (
        <div>
            <div className="search-bar">Find your seat for any occasion</div>
            <div className="restaurant-index-container">
                <div className="header-container">
                    <h2 className="restaurants-header">Recommended restaurants</h2>
                </div>
                <ul className="restaurant-index">
                    {restaurants.map( restaurant => (
                        <li key={restaurant.id}>
                            <RestaurantIndexItem restaurant={restaurant}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantIndex;