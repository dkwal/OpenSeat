import React from "react"

const RestaurantIndexItem = ({ restaurant }) => {

    return(
        <div className="restaurant-index-item">
            <div className="restaurant-name">{restaurant.name}</div>
            <div className="ratings-reviews">
                <div className="overall-rating">Overall rating</div>
                <div className="review-count">Num reviews</div>
            </div>
            <div className="restaurant-details">
                <div className="food-type">{restaurant.food_type} &#11825; </div>
                <div className="price-range">{restaurant.price_range}</div>
            </div>
            <div className="timeslot-buttons">
                <button>5:30 pm</button>
                <button>6:00 pm</button>
            </div>
        </div>
    )
}

export default RestaurantIndexItem;