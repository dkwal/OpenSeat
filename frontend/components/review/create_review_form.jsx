import React from "react";

class CreateReviewForm extends React.Component {
    constructor(props) {
        super(props);
        let restaurant;
        if (this.props.restaurant) {
            restaurant = this.props.restaurant;
        } else {
            restaurant = { // placeholder to avoid erroring out on page refresh
                id: 0,
                name: 'placeholder'
            }; 
        }
        this.state = {
            review: {
                user_id: this.props.userId,
                restaurant_id: restaurant.id,
                body: "",
                overall_rating: 5,
                food_rating: 5,
                service_rating: 5,
                ambience_rating: 5,
                value_rating: 5
            },
            restaurant: restaurant
        }
    }

    componentDidMount() {
        console.log(this.props);
        this.props.fetchRestaurant()
            .then(response => this.setState({restaurant: response.restaurant}))
    }

    handleSubmit() {

    }

    render() {
        return (
        <div className="review-ratings-container">
            <h2>Rate your experience at {this.state.restaurant.name}</h2>
            <form className="review-ratings" onSubmit={this.handleSubmit}>
                <svg style={{display: 'none'}}>
                    <symbol id="star">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </symbol>
                </svg>

                <label className="overall-rating" >
                    <div className="review-category">
                        <div className="review-category-name">Overall</div>
                        <div className="rating-stars-container">
                            <input className="star-radio" type="radio" id="r1-overall" />
                            <label htmlFor="r1-overall">
                                <svg className="star">
                                    <use xlinkHref="#star"></use>
                                </svg>
                            </label>

                            <input className="star-radio" type="radio" id="r2-overall" />
                            <label htmlFor="r2-overall">
                                <svg className="star">
                                    <use xlinkHref="#star"></use>
                                </svg>
                            </label>

                            <input className="star-radio" type="radio" id="r3-overall" />
                            <label htmlFor="r3-overall">
                                <svg className="star">
                                    <use xlinkHref="#star"></use>
                                </svg>
                            </label>

                            <input className="star-radio" type="radio" id="r4-overall" />
                            <label htmlFor="r4-overall">
                                <svg className="star">
                                    <use xlinkHref="#star"></use>
                                </svg>
                            </label>

                            <input className="star-radio" type="radio" id="r5-overall" />
                            <label htmlFor="r5-overall">
                                <svg className="star">
                                    <use xlinkHref="#star"></use>
                                </svg>
                            </label>
                        </div>
                    </div>
                </label>

                <label className="food-rating" >
                    <div className="review-category">
                        <div className="review-category-name">Food</div>
                        <div className="rating-stars-container">
                            <input className="star-radio" type="radio" id="r1-food" />
                            <label htmlFor="r1-food">
                                <svg className="star">
                                    <use xlinkHref="#star"></use>
                                </svg>
                            </label>

                            <input className="star-radio" type="radio" id="r2-food" />
                            <label htmlFor="r2-food">
                                <svg className="star">
                                    <use xlinkHref="#star"></use>
                                </svg>
                            </label>

                            <input className="star-radio" type="radio" id="r3-food" />
                            <label htmlFor="r3-food">
                                <svg className="star">
                                    <use xlinkHref="#star"></use>
                                </svg>
                            </label>

                            <input className="star-radio" type="radio" id="r4-food" />
                            <label htmlFor="r4-food">
                                <svg className="star">
                                    <use xlinkHref="#star"></use>
                                </svg>
                            </label>

                            <input className="star-radio" type="radio" id="r5-food" />
                            <label htmlFor="r5-food">
                                <svg className="star">
                                    <use xlinkHref="#star"></use>
                                </svg>
                            </label>
                        </div>
                    </div>
                </label>

                <label className="service-rating" >
                    <div className="review-category">
                        <div className="review-category-name">Service</div>
                        <div className="rating-stars-container">
                            <input className="star-radio" type="radio" id="r1-service" />
                            <label htmlFor="r1-service">
                                <svg className="star">
                                    <use xlinkHref="#star"></use>
                                </svg>
                            </label>

                            <input className="star-radio" type="radio" id="r2-service" />
                            <label htmlFor="r2-service">
                                <svg className="star">
                                    <use xlinkHref="#star"></use>
                                </svg>
                            </label>

                            <input className="star-radio" type="radio" id="r3-service" />
                            <label htmlFor="r3-service">
                                <svg className="star">
                                    <use xlinkHref="#star"></use>
                                </svg>
                            </label>

                            <input className="star-radio" type="radio" id="r4-service" />
                            <label htmlFor="r4-service">
                                <svg className="star">
                                    <use xlinkHref="#star"></use>
                                </svg>
                            </label>

                            <input className="star-radio" type="radio" id="r5-service" />
                            <label htmlFor="r5-service">
                                <svg className="star">
                                    <use xlinkHref="#star"></use>
                                </svg>
                            </label>
                        </div>
                    </div>
                </label>

                <label className="ambience-rating" >
                    <div className="review-category">
                        <div className="review-category-name">Ambience</div>
                        <div className="rating-stars-container">
                            <input className="star-radio" type="radio" id="r1-ambience" />
                            <label htmlFor="r1-ambience">
                                <svg className="star">
                                    <use xlinkHref="#star"></use>
                                </svg>
                            </label>

                            <input className="star-radio" type="radio" id="r2-ambience" />
                            <label htmlFor="r2-ambience">
                                <svg className="star">
                                    <use xlinkHref="#star"></use>
                                </svg>
                            </label>

                            <input className="star-radio" type="radio" id="r3-ambience" />
                            <label htmlFor="r3-ambience">
                                <svg className="star">
                                    <use xlinkHref="#star"></use>
                                </svg>
                            </label>

                            <input className="star-radio" type="radio" id="r4-ambience" />
                            <label htmlFor="r4-ambience">
                                <svg className="star">
                                    <use xlinkHref="#star"></use>
                                </svg>
                            </label>

                            <input className="star-radio" type="radio" id="r5-ambience" />
                            <label htmlFor="r5-ambience">
                                <svg className="star">
                                    <use xlinkHref="#star"></use>
                                </svg>
                            </label>
                        </div>
                    </div>
                </label>

                <label className="value-rating" >
                    <div className="review-category">
                        <div className="review-category-name">Value</div>
                        <div className="rating-stars-container">
                            <input className="star-radio" type="radio" id="r1-value" />
                            <label htmlFor="r1-value">
                                <svg className="star">
                                    <use xlinkHref="#star"></use>
                                </svg>
                            </label>

                            <input className="star-radio" type="radio" id="r2-value" />
                            <label htmlFor="r2-value">
                                <svg className="star">
                                    <use xlinkHref="#star"></use>
                                </svg>
                            </label>

                            <input className="star-radio" type="radio" id="r3-value" />
                            <label htmlFor="r3-value">
                                <svg className="star">
                                    <use xlinkHref="#star"></use>
                                </svg>
                            </label>

                            <input className="star-radio" type="radio" id="r4-value" />
                            <label htmlFor="r4-value">
                                <svg className="star">
                                    <use xlinkHref="#star"></use>
                                </svg>
                            </label>

                            <input className="star-radio" type="radio" id="r5-value" />
                            <label htmlFor="r5-value">
                                <svg className="star">
                                    <use xlinkHref="#star"></use>
                                </svg>
                            </label>
                        </div>
                    </div>
                </label>

            </form>
        </div>
        )
    }
}

export default CreateReviewForm;