import React from "react";
import { withRouter } from "react-router-dom";

class ProfileFavorite extends React.Component {
    constructor(props) {
        super(props);
        this.updatePath = this.updatePath.bind(this);
        this.removeFavorite = this.removeFavorite.bind(this);
    }

    updatePath() {
        const path = `/restaurants/${this.props.favorite.restaurant_id}`;
        this.props.history.push(path);

    }

    removeFavorite() {
        this.props.deleteFavorite(this.props.favorite.id);
    }

    colorStars() {
        const restaurantName = this.props.favorite.restaurant.name.split(" ").join("").split("&").join("");

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
        let score = this.props.favorite.avg_rating;
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
        if (starCount < 5) {
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
        const restaurantName = this.props.favorite.restaurant.name.split(" ").join("").split("&").join("");
        this.colorStars();
        return (
            <div className="profile-favorite">
                <img className="reservation-img" src={this.props.favorite.photourl} />
                <div className="profile-favorite-text">
                    <ul className="favorite-info">
                        <li className="profile-favorite-restaurant">{this.props.favorite.restaurant.name}</li>
                        <li className="overall-rating">
                            <i className="fa-solid fa-star" id={`${restaurantName}-star-0`}></i>
                            <i className="fa-solid fa-star" id={`${restaurantName}-star-1`}></i>
                            <i className="fa-solid fa-star" id={`${restaurantName}-star-2`}></i>
                            <i className="fa-solid fa-star" id={`${restaurantName}-star-3`}></i>
                            <i className="fa-solid fa-star" id={`${restaurantName}-star-4`}></i>
                        </li>
                        <li>{this.props.favorite.restaurant.food_type}</li>
                        <li className="remove-favorite" onClick={this.removeFavorite}>
                            <i id="profile-bookmark" className="fa-solid fa-bookmark"></i>
                            <div>Remove from favorited restaurants</div>
                        </li>
                        <li>
                            <button className="profile-favorite-button" onClick={this.updatePath}>Reserve a seat</button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default withRouter(ProfileFavorite);