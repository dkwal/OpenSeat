import React from "react";
import ReservationTileContainer from "../reservation/reservation_tile_container";
import ReviewShow from "../review/review_show";

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props);
        this.saveRestaurant = this.saveRestaurant.bind(this);
        this.eventListenerCreated = false; // needed to ensure only one event listener is created
        this.menuRef = React.createRef();
        this.topRef = React.createRef();
        this.reviewsRef = React.createRef();
        this.bookmarkStyle = {};
        this.bookmarkClass = "fa-regular";
    }

    
    isFavorited(restaurantId) {
        const favorites = this.props.userFavorites;
        
        for (let i = 0; i < favorites.length; i++) {
            if (favorites[i].restaurant_id === restaurantId) {
                return favorites[i];
            }
        }
    }
    
    initFavButtonText() {
         const buttonContent = document.getElementById("fav-button-text");
         const restaurant = this.props.restaurant;
         let buttonText = "Save this restaurant";
         if (this.isFavorited(restaurant.id)) {
            buttonText = "Restaurant saved!";
            this.bookmarkStyle = {
                color: "#da3743"
            };
            this.bookmarkClass = "fa-solid";
        }
        buttonContent.innerHTML = buttonText;
        this.forceUpdate();
    }
    
    componentDidMount() {
        this.props.fetchRestaurant()
        .then(() => {
            if (this.props.currentUser) {
                this.props.fetchFavorites(this.props.currentUser.id)
                .then(() => {
                    this.initFavButtonText();
                })
            }
            this.props.fetchRestaurantReviews();
        })
    }
    
    saveRestaurant() {
        const buttonContent = document.getElementById("fav-button-text");

        // check if user is logged in
        if (!this.props.currentUser) {
            if (buttonContent) {
                buttonContent.innerHTML = "Save this restaurant";
            }
            return this.props.openModal;
        }
        // create event listener to switch button text
        if (buttonContent && !this.eventListenerCreated) {
            this.eventListenerCreated = true;
            const button = document.getElementById("fav-button")
            button.addEventListener('click', () => {
                const startingText = "Save this restaurant";
                const bookmark = document.getElementById("bookmark");
                if (buttonContent.innerHTML.includes(startingText)) {
                    buttonContent.innerHTML = "Restaurant saved!";
                    this.bookmarkStyle = {
                        color: "#da3743"
                    };
                    this.bookmarkClass = "fa-solid";
                } else {
                    buttonContent.innerHTML = startingText;
                    this.bookmarkStyle = {};
                    this.bookmarkClass = "fa-regular";
                }
            })
        }


        const restaurantId = this.props.restaurant.id;
        const userId = this.props.currentUser.id;
        const newFavorite = {
            user_id: userId,
            restaurant_id: restaurantId
        };
        
        const existingFavorite = this.isFavorited(restaurantId);
        
        if (existingFavorite) {
            return () => {
                this.props.deleteFavorite(existingFavorite.id);
            }
        } else {
            return () => {
                this.props.createFavorite(newFavorite);
            }
        }
    }
    
    scrollPage(ref) {
        return () => ref.current.scrollIntoView();
    }

    colorStars() {
        const restaurantName = this.props.restaurant.name.split(" ").join("").split("&").join("");
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
            document.styleSheets[16].insertRule(rule);
            starCount += 1;
            score -= 1.0;
        }
        if (starCount < 4) {
            document.styleSheets[16].insertRule(`#${restaurantName}-star-${starCount}:after {
                font-family: FontAwesome;
                content: "\\f005";
                position: absolute;
                left: 0;
                right: 0;
                width: ${score * 100}%;
                overflow: hidden;
                color: #da3743;
            }`);
        }
    }

    render() {
        const restaurant = this.props.restaurant;
        const reviews = this.props.reviews;
        if (!this.props.restaurant || !this.props.reviews) {
            return null;
        }
        const restaurantName = restaurant.name.split(" ").join("").split("&").join("");
        this.colorStars();

        return(
        <div className="restaurant-show" ref={this.topRef}>
            <div className="restaurant-banner">
                <img src={restaurant.photourl}></img>
                <button id="fav-button" className="favorite-restaurant" onClick={this.saveRestaurant()}>
                    <div className="fav-button-content">
                        <i id="bookmark" className={`${this.bookmarkClass} fa-bookmark`} style={this.bookmarkStyle}></i>
                        <div id="fav-button-text"></div>
                    </div>
                </button>
            </div>

            <div className="restaurant-left-col">
                <ul className="restaurant-section-links">
                    <li onClick={this.scrollPage(this.topRef)}>Overview</li>
                    <li onClick={this.scrollPage(this.menuRef)}>Menu</li>
                    <li onClick={this.scrollPage(this.reviewsRef)}>Reviews</li>
                </ul>
                <div className="restaurant-show-name">{restaurant.name}</div>
                <div className="restaurant-details">
                    <ul className="details-list">
                        <li>
                            <div className="overall-rating">
                                <i className="fa-solid fa-star" id={`${restaurantName}-star-0`}></i>
                                <i className="fa-solid fa-star" id={`${restaurantName}-star-1`}></i>
                                <i className="fa-solid fa-star" id={`${restaurantName}-star-2`}></i>
                                <i className="fa-solid fa-star" id={`${restaurantName}-star-3`}></i>
                                <i className="fa-solid fa-star" id={`${restaurantName}-star-4`}></i>
                            </div>
                            {restaurant.avg_rating.toFixed(1)}
                        </li>
                        <li>
                            <i className="fa-regular fa-message"></i>
                            {restaurant.num_reviews} Reviews
                        </li>
                        <li>
                            <span className="fa-money-bill"></span>
                            {restaurant.price_range}
                        </li>
                        <li>
                            <span className="fa-utensils"></span>
                            {restaurant.food_type}
                        </li>
                    </ul>
                </div>
                <div className="restaurant-description">{restaurant.description}</div>
                <div className="reviews-header" ref={this.reviewsRef}>What {restaurant.num_reviews} people are saying</div>
                <div className="reviews-intro">
                    <div className="reviews-intro-header">Overall ratings and reviews</div>
                    <div className="reviews-intro-description">Reviews can only be made by diners who have eaten at this restaurant</div>
                    <div className="reviews-overall-rating">
                        <div className="overall-rating">
                            <i className="fa-solid fa-star" id={`${restaurantName}-star-0`}></i>
                            <i className="fa-solid fa-star" id={`${restaurantName}-star-1`}></i>
                            <i className="fa-solid fa-star" id={`${restaurantName}-star-2`}></i>
                            <i className="fa-solid fa-star" id={`${restaurantName}-star-3`}></i>
                            <i className="fa-solid fa-star" id={`${restaurantName}-star-4`}></i>
                        </div>
                        <div>{restaurant.avg_rating.toFixed(1)} based on recent ratings</div>
                    </div>
                    <div className="overall-rating-categories">
                        <div className="food_rating">
                            <div>{restaurant.food_rating.toFixed(1)}</div>
                            <div>Food</div>
                        </div>
                        <div className="service_rating">
                            <div>{restaurant.service_rating.toFixed(1)}</div>
                            <div>Service</div>
                        </div>
                        <div className="ambience_rating">
                            <div>{restaurant.ambience_rating.toFixed(1)}</div>
                            <div>Ambience</div>
                        </div>
                        <div className="value_rating">
                            <div>{restaurant.value_rating.toFixed(1)}</div>
                            <div>Value</div>
                        </div>
                    </div>
                </div>
                <ul className="reviews-index">
                    {reviews.map( review => (
                        <li key={review.id}>
                            <ReviewShow review={review} restaurant={restaurant}/>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="restaurant-right-col">
                <ReservationTileContainer restaurantId={restaurant.id} />
                <ul className="additional-details">
                    <li className="additional-info-header">Additional information</li>
                    <li className="additional-info-item">
                        <i className="fa-regular fa-building"></i>
                        <div>Address</div>
                    </li>
                    <li className="additional-info-content">{restaurant.address}</li>
                    <li className="additional-info-item">
                        <i className="fa-solid fa-phone"></i>
                        <div>Phone Number</div>
                    </li>
                    <li className="additional-info-content">{restaurant.phone_number}</li>
                    <li className="additional-info-item">
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        <div>Website</div>
                    </li>
                    <li className="additional-info-content" ref={this.menuRef}>{restaurant.menu}</li>
                </ul>
            </div>
        </div>
        )
    }

}

export default RestaurantShow;