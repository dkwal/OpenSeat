import React from "react";

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchRestaurant();
    }
    
    render() {
        console.log("restaurant show page is rendering");
        const restaurant = this.props.restaurant;
        if (!this.props.restaurant) {
            return null;
        }
        return(
        <div className="restaurant-show">
            <div className="restaurant-left-col">
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
            </div>
            <div className="restaurant-right-col">
                <div className="reservation-tile">
                    <div className="make-reservation">Make a reservation</div>
                    <div className="reservation-details">
                        <div className="reservation-party">
                            <div className="reservation-detail-header">Party size</div>
                            <div>Party size dropdown</div>
                        </div>
                        <div className="date-and-time">
                            <div className="reservation-date">
                                <div className="reservation-detail-header">Date</div>
                                <div>Date dropdown</div>
                            </div>
                            <div className="reservation-time">
                                <div className="reservation-detail-header">Time</div>
                                <div>Time dropdown</div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="additional-details">
                    <li className="additional-info-header">Additional information</li>
                    <li>Address</li>
                    <li>{restaurant.address}</li>
                    <li>Phone Number</li>
                    <li>{restaurant.phone_number}</li>
                    <li>Menu</li>
                    <li>{restaurant.menu}</li>
                </ul>
            </div>
        </div>
        )
    }

}

export default RestaurantShow;