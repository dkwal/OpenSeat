import React from "react";

class CreateReviewForm extends React.Component {
    constructor(props) {
        super(props);
        let restaurant;
        if (this.props.restaurant) {
            restaurant = this.props.restaurant;
        } else {
            restaurant = { // placeholder to avoid erroring out on page refresh
                name: 'placeholder'
            }; 
        }
        this.state = {
            review: {
                user_id: this.props.userId,
                restaurant_id: this.props.match.params.restaurantId,
                body: "",
                overall_rating: null,
                food_rating: null,
                service_rating: null,
                ambience_rating: null,
                value_rating: null
            },
            restaurant: restaurant,
            errors: {
                overall: "Please rate the restaurant overall",
                food: "Please rate the food at this restaurant",
                service: "Please rate the service at this restaurant",
                ambience: "Please rate the ambience at this restaurant",
                value: "Please rate the overall value of the experience",
                body: "Please write at least 50 characters"
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchRestaurant()
            .then(response => {
                this.setState({restaurant: response.restaurant});
                this.props.fetchRestaurantReviews();
            })
    }

    update(field) {
        return e=> {
            const fieldName = e.currentTarget.name;
            const value = e.currentTarget.value;
            // error handling
            let errors = this.state.errors;
            switch (fieldName) {
                case "overall":
                    if (value) {
                        errors.overall = "";
                    }
                    break;
                case "food":
                    if (value) {
                        errors.food = "";
                    }
                    break;
                case "service":
                    if (value) {
                        errors.service = "";
                    }
                    break;
                case "ambience":
                    if (value) {
                        errors.ambience = "";
                    }
                    break;
                case "value":
                    if (value) {
                        errors.value = "";
                    }
                    break;
                    case "body":
                        if (value.length < 50) {
                            errors.body = "Please write at least 50 characters";
                        } else {
                            errors.body = ""; 
                        }
                    break;
                default:
                    break;
            }

            const oldReview = this.state.review;
            const newReview = Object.assign({}, oldReview);
            newReview[field] = e.currentTarget.value;
            this.setState({errors: errors, review: newReview});
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const errors = this.state.errors;
        let errorsPresent = false;
        Object.values(errors).forEach(error => {
            if (error.length > 0) {
                errorsPresent = true;
            }
        })
        // return out of function early if errors are present
        if (errorsPresent) {
            return;
        }
        this.props.submitReview(this.state.review, this.props.match.params.restaurantId)
            .then(response => this.props.history.push(`/restaurants/${this.props.match.params.restaurantId}`));
    }

    render() {
        const errors = this.state.errors;
        return (
        <div className="review-ratings-container">
            <h2>Rate your experience at {this.state.restaurant.name}</h2>
            <form className="review-ratings" onSubmit={this.handleSubmit}>
                <svg style={{display: 'none'}}>
                    <symbol id="star">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </symbol>
                </svg>

                <label className="form-overall-rating" >
                    <div className="review-category">
                        <div className="review-category-name">Overall</div>
                        <div className="rating-stars-container">
                            <div className="rating-container">
                                <input className="star-radio" type="radio" id="r5-overall" name="overall" value="5" onChange={this.update("overall_rating")} />
                                <label htmlFor="r5-overall">
                                    <svg className="star">
                                        <use xlinkHref="#star"></use>
                                    </svg>
                                </label>

                                <input className="star-radio" type="radio" id="r4-overall" name="overall" value="4" onChange={this.update("overall_rating")} />
                                <label htmlFor="r4-overall">
                                    <svg className="star">
                                        <use xlinkHref="#star"></use>
                                    </svg>
                                </label>

                                <input className="star-radio" type="radio" id="r3-overall" name="overall" value="3" onChange={this.update("overall_rating")} />
                                <label htmlFor="r3-overall">
                                    <svg className="star">
                                        <use xlinkHref="#star"></use>
                                    </svg>
                                </label>


                                <input className="star-radio" type="radio" id="r2-overall" name="overall" value="2" onChange={this.update("overall_rating")} />
                                <label htmlFor="r2-overall">
                                    <svg className="star">
                                        <use xlinkHref="#star"></use>
                                    </svg>
                                </label>

                                <input className="star-radio" type="radio" id="r1-overall" name="overall" value="1" onChange={this.update("overall_rating")} />
                                <label htmlFor="r1-overall">
                                    <svg className="star">
                                        <use xlinkHref="#star"></use>
                                    </svg>
                                </label>
                            </div>
                        </div>
                    </div>
                </label>
                <div className="error">{errors.overall}</div>

                <label className="food-rating" >
                    <div className="review-category">
                        <div className="review-category-name">Food</div>
                        <div className="rating-stars-container">
                            <div className="rating-container">
                                <input className="star-radio" type="radio" id="r5-food" name="food" value="5" onChange={this.update("food_rating")} />
                                <label htmlFor="r5-food">
                                    <svg className="star">
                                        <use xlinkHref="#star"></use>
                                    </svg>
                                </label>
                                
                                <input className="star-radio" type="radio" id="r4-food" name="food" value="4" onChange={this.update("food_rating")} />
                                <label htmlFor="r4-food">
                                    <svg className="star">
                                        <use xlinkHref="#star"></use>
                                    </svg>
                                </label>

                                <input className="star-radio" type="radio" id="r3-food" name="food" value="3" onChange={this.update("food_rating")} />
                                <label htmlFor="r3-food">
                                    <svg className="star">
                                        <use xlinkHref="#star"></use>
                                    </svg>
                                </label>

                                <input className="star-radio" type="radio" id="r2-food" name="food" value="2" onChange={this.update("food_rating")} />
                                <label htmlFor="r2-food">
                                    <svg className="star">
                                        <use xlinkHref="#star"></use>
                                    </svg>
                                </label>

                                <input className="star-radio" type="radio" id="r1-food" name="food" value="1" onChange={this.update("food_rating")} />
                                <label htmlFor="r1-food">
                                    <svg className="star">
                                        <use xlinkHref="#star"></use>
                                    </svg>
                                </label>
                            </div>
                        </div>
                    </div>
                </label>
                <div className="error">{errors.food}</div>

                <label className="service-rating" >
                    <div className="review-category">
                        <div className="review-category-name">Service</div>
                        <div className="rating-stars-container">
                            <div className="rating-container">
                                <input className="star-radio" type="radio" id="r5-service" name="service" value="5" onChange={this.update("service_rating")} />
                                <label htmlFor="r5-service">
                                    <svg className="star">
                                        <use xlinkHref="#star"></use>
                                    </svg>
                                </label>

                                <input className="star-radio" type="radio" id="r4-service" name="service" value="4" onChange={this.update("service_rating")} />
                                <label htmlFor="r4-service">
                                    <svg className="star">
                                        <use xlinkHref="#star"></use>
                                    </svg>
                                </label>

                                <input className="star-radio" type="radio" id="r3-service" name="service" value="3" onChange={this.update("service_rating")} />
                                <label htmlFor="r3-service">
                                    <svg className="star">
                                        <use xlinkHref="#star"></use>
                                    </svg>
                                </label>

                                <input className="star-radio" type="radio" id="r2-service" name="service" value="2" onChange={this.update("service_rating")} />
                                <label htmlFor="r2-service">
                                    <svg className="star">
                                        <use xlinkHref="#star"></use>
                                    </svg>
                                </label>

                                <input className="star-radio" type="radio" id="r1-service" name="service" value="1" onChange={this.update("service_rating")} />
                                <label htmlFor="r1-service">
                                    <svg className="star">
                                        <use xlinkHref="#star"></use>
                                    </svg>
                                </label>
                            </div>
                        </div>
                    </div>
                </label>
                <div className="error">{errors.service}</div>

                <label className="ambience-rating" >
                    <div className="review-category">
                        <div className="review-category-name">Ambience</div>
                        <div className="rating-stars-container">
                            <div className="rating-container">
                                <input className="star-radio" type="radio" id="r5-ambience" name="ambience" value="5" onChange={this.update("ambience_rating")} />
                                <label htmlFor="r5-ambience">
                                    <svg className="star">
                                        <use xlinkHref="#star"></use>
                                    </svg>
                                </label>
                                
                                <input className="star-radio" type="radio" id="r4-ambience" name="ambience" value="4" onChange={this.update("ambience_rating")} />
                                <label htmlFor="r4-ambience">
                                    <svg className="star">
                                        <use xlinkHref="#star"></use>
                                    </svg>
                                </label>

                                <input className="star-radio" type="radio" id="r3-ambience" name="ambience" value="3" onChange={this.update("ambience_rating")} />
                                <label htmlFor="r3-ambience">
                                    <svg className="star">
                                        <use xlinkHref="#star"></use>
                                    </svg>
                                </label>

                                <input className="star-radio" type="radio" id="r2-ambience" name="ambience" value="2" onChange={this.update("ambience_rating")} />
                                <label htmlFor="r2-ambience">
                                    <svg className="star">
                                        <use xlinkHref="#star"></use>
                                    </svg>
                                </label>

                                <input className="star-radio" type="radio" id="r1-ambience" name="ambience" value="1" onChange={this.update("ambience_rating")} />
                                <label htmlFor="r1-ambience">
                                    <svg className="star">
                                        <use xlinkHref="#star"></use>
                                    </svg>
                                </label>
                            </div>
                        </div>
                    </div>
                </label>
                <div className="error">{errors.ambience}</div>

                <label className="value-rating" >
                    <div className="review-category">
                        <div className="review-category-name">Value</div>
                        <div className="rating-stars-container">
                            <div className="rating-container">
                                <input className="star-radio" type="radio" id="r5-value" name="value" value="5" onChange={this.update("value_rating")} />
                                <label htmlFor="r5-value">
                                    <svg className="star">
                                        <use xlinkHref="#star"></use>
                                    </svg>
                                </label>

                                <input className="star-radio" type="radio" id="r4-value" name="value" value="4" onChange={this.update("value_rating")} />
                                <label htmlFor="r4-value">
                                    <svg className="star">
                                        <use xlinkHref="#star"></use>
                                    </svg>
                                </label>

                                <input className="star-radio" type="radio" id="r3-value" name="value" value="3" onChange={this.update("value_rating")} />
                                <label htmlFor="r3-value">
                                    <svg className="star">
                                        <use xlinkHref="#star"></use>
                                    </svg>
                                </label>

                                <input className="star-radio" type="radio" id="r2-value" name="value" value="2" onChange={this.update("value_rating")} />
                                <label htmlFor="r2-value">
                                    <svg className="star">
                                        <use xlinkHref="#star"></use>
                                    </svg>
                                </label>

                                <input className="star-radio" type="radio" id="r1-value" name="value" value="1" onChange={this.update("value_rating")} />
                                <label htmlFor="r1-value">
                                    <svg className="star">
                                        <use xlinkHref="#star"></use>
                                    </svg>
                                </label>
                            </div>
                        </div>
                    </div>
                </label>
                <div className="error">{errors.value}</div>
                <textarea className="review-text" name="body" placeholder="Your review must be at least 50 characters" onChange={this.update("body")} ></textarea>
                <div className="body-error">{errors.body}</div>
                <div className="submit-review-button">
                    <button>Submit review</button>
                </div>
            </form>
        </div>
        )
    }
}

export default CreateReviewForm;