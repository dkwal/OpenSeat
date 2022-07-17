import React from "react"
import { withRouter } from "react-router-dom";

class RestaurantIndexItem extends React.Component {

    constructor(props) {
        super(props)
        this.updatePath = this.updatePath.bind(this);
    }

    updatePath() {
        let path = `/api/restaurants/${this.props.restaurant.id}`;
        this.props.history.push(path);
    }

    render() {
        return(
            <div className="restaurant-index-item" onClick={this.updatePath}>
                <div className="restaurant-name">{this.props.restaurant.name}</div>
                <div className="ratings-reviews">
                    <div className="overall-rating">Overall rating</div>
                    <div className="review-count">Num reviews</div>
                </div>
                <div className="restaurant-details">
                    <div className="food-type">{this.props.restaurant.food_type} &#11825; </div>
                    <div className="price-range">{this.props.restaurant.price_range}</div>
                </div>
                <div className="timeslot-buttons">
                    <button>5:30 pm</button>
                    <button>6:00 pm</button>
                </div>
            </div>
        )
    }
}

export default withRouter(RestaurantIndexItem);