import React from "react"
import RestaurantIndexItem from "./restaurant_index_item"

const RestaurantIndex = ({ restaurants }) => {
    console.log(restaurants);
    return (
        <ul className="restaurant-index">
            {restaurants.map( restaurant => (
                <li key={restaurant.id}>
                    <RestaurantIndexItem restaurant={restaurant}/>
                </li>
            ))}
        </ul>
    )
}

export default RestaurantIndex;