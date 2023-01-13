import React from "react"
import { withRouter } from "react-router-dom";

class RestaurantIndexItem extends React.Component {

    constructor(props) {
        super(props)
        this.updatePath = this.updatePath.bind(this);
    }

    updatePath() {
        let path = `/restaurants/${this.props.restaurant.id}`;
        this.props.history.push(path);
    }

    colorStars() {
        const restaurantName = this.props.restaurant.name.split(" ").join("").split("&").join("");

        // need to clear existing style rules for these stars before adding new ones
        const sheet = document.styleSheets[0];
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < sheet.cssRules.length; j++) {
                if (sheet.cssRules[j].selectorText === `#${restaurantName}-star-${i}::after`) {
                    sheet.deleteRule(j);
                }
            }
        }

        // now we can add new rules
        let score = this.props.restaurant.avg_rating;
        let starCount = 0;
        while (score >= 1) {
            const rule = `#${restaurantName}-star-${starCount}:after {
                font-family: FontAwesome;
                content: "\\f005";
                position: absolute;
                left: 0;
                right: 0;
                width: 100%;
                overflow: hidden;
                color: #da3743;
            }`;
            document.styleSheets[0].insertRule(rule, 1);
            starCount += 1;
            score -= 1.0;
        }
        if (starCount < 4) {
            document.styleSheets[0].insertRule(`#${restaurantName}-star-${starCount}:after {
                font-family: FontAwesome;
                content: "\\f005";
                position: absolute;
                left: 0;
                right: 0;
                width: ${score * 100}%;
                overflow: hidden;
                color: #da3743;
            }`, 1);
        }
    }

    render() {
        this.colorStars();
        const restaurantName = this.props.restaurant.name.split(" ").join("").split("&").join("");
        return(
            <div className="restaurant-index-item" onClick={this.updatePath}>
                <img src={this.props.restaurant.photourl} />
                <div className="restaurant-index-item-details">
                    <div className="restaurant-name">{this.props.restaurant.name}</div>
                    <div className="ratings-reviews">
                        <div className="overall-rating">
                            <i className="fa-solid fa-star" id={`${restaurantName}-star-0`}></i>
                            <i className="fa-solid fa-star" id={`${restaurantName}-star-1`}></i>
                            <i className="fa-solid fa-star" id={`${restaurantName}-star-2`}></i>
                            <i className="fa-solid fa-star" id={`${restaurantName}-star-3`}></i>
                            <i className="fa-solid fa-star" id={`${restaurantName}-star-4`}></i>
                        </div>
                        <div className="review-count">{this.props.restaurant.num_reviews} reviews</div>
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
            </div>
        )
    }
}

export default withRouter(RestaurantIndexItem);