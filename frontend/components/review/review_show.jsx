import React from "react";

class ReviewShow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const review = this.props.review;
        const restaurant = this.props.restaurant;
        return (
            <div className="review-details">
                <ul className="review-scores">
                    <li>Overall</li>
                    <li>{review.overall_rating}</li>
                    <li>Food</li>
                    <li>{review.food_rating}</li>
                    <li>Service</li>
                    <li>{review.service_rating}</li>
                    <li>Ambience</li>
                    <li>{review.ambience_rating}</li>
                    <li>Value</li>
                    <li>{review.value_rating}</li>
                </ul>
                <p className="review-body">{review.body}</p>
            </div>
        )
    }
}

export default ReviewShow;