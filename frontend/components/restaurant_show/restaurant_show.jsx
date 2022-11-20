import React from "react";
import ReservationTileContainer from "../reservation/reservation_tile_container";
import ReviewShow from "../review/review_show";

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props);
        this.saveRestaurant = this.saveRestaurant.bind(this);
    }

    componentDidMount() {
        this.props.fetchRestaurant();
        if (this.props.currentUser) {
            this.props.fetchFavorites(this.props.currentUser.id);
        }
    }

    saveRestaurant() {
        const favorites = this.props.userFavorites;
        const userId = this.props.currentUser.id;
        const restaurantId = this.props.restaurant.id;
        const newFavorite = {
            user_id: userId,
            restaurant_id: restaurantId
        };

        let existingFavorite;
        for (let i = 0; i < favorites.length; i++) {
            if (favorites[i].user_id === this.props.currentUser.id) {
                existingFavorite = favorites[i];
                break;
            }
        }
        if (existingFavorite) {
            return () => this.props.deleteFavorite(existingFavorite.id);
        } else {
            return () => this.props.createFavorite(newFavorite);
        }
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
            <div className="restaurant-banner">
                <img src={restaurant.photourl}></img>
                <button className="favorite-restaurant" onClick={this.saveRestaurant()}>Save this restaurant</button>
            </div>

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