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
                        <li>Rating</li>
                        <li>Num Reviews</li>
                        <li>{restaurant.price_range}</li>
                        <li>{restaurant.food_type}</li>
                    </ul>
                </div>
                <div className="restaurant-description">{restaurant.description}</div>
                <div className="reviews-header" ref={this.reviewsRef}>What people are saying</div>
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
                    <li ref={this.menuRef}>{restaurant.menu}</li>
                </ul>
            </div>
        </div>
        )
    }

}

export default RestaurantShow;