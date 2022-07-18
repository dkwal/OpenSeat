import React from "react"
import RestaurantIndexItem from "./restaurant_index_item"

const RestaurantIndex = ({ restaurants }) => {
    console.log(restaurants);
    return (
        <div>
            <div className="search-bar">Search bar will go here</div>
            <h2 className="restaurants-header">Recommended restaurants</h2>
        <ul className="restaurant-index">
            {restaurants.map( restaurant => (
                <li key={restaurant.id}>
                    <RestaurantIndexItem restaurant={restaurant}/>
                </li>
            ))}
        </ul>
        </div>
    )
}

export default RestaurantIndex;