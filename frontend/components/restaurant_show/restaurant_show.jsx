import React from "react";
import ReservationTileContainer from "../reservation/reservation_tile_container";
import ReviewShow from "../review/review_show";

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchRestaurant();
    }
    
    render() {
        const restaurant = this.props.restaurant;
        if (!this.props.restaurant) {
            return null;
        }
        let reviews;
        if (!restaurant.reviews) {
            reviews = [];
        } else {
            reviews = Object.values(restaurant.reviews)
        }
        return(
        <div className="restaurant-show">
            <img src={restaurant.photourl}></img>
            <div className="restaurant-left-col">
                <ul className="restaurant-section-links">
                    <li>Overview</li>
                    <li>Menu</li>
                    <li>Reviews</li>
                </ul>
                <div className="restaurant-show-name">{restaurant.name}</div>
                <div className="restaurant-details">
                    <ul className="details-list">
                        <li>Rating</li>
                        <li>Num Reviews</li>
                        <li>{restaurant.price_range}</li>
                        <li>{restaurant.food_type}</li>
                    </ul>
                </div>
                <div className="restaurant-description">{restaurant.description}</div>
                <div className="reviews-header">What people are saying</div>
                <ul className="reviews-index">
                    {reviews.map( review => (
                        <li key={review.id}>
                            <ReviewShow review={review}/>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="restaurant-right-col">
                <ReservationTileContainer restaurantId={restaurant.id} />
                <ul className="additional-details">
                    <li className="additional-info-header">Additional information</li>
                    <li className="additional-info-item">Address</li>
                    <li>{restaurant.address}</li>
                    <li className="additional-info-item">Phone Number</li>
                    <li>{restaurant.phone_number}</li>
                    <li className="additional-info-item">Menu</li>
                    <li>{restaurant.menu}</li>
                </ul>
            </div>
        </div>
        )
    }

}

export default RestaurantShow;