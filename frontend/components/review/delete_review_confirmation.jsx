import React from "react";
import { Link } from "react-router-dom";

class DeleteReviewConfirmation extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.deleteReview(this.props.review.id);
        this.props.history.push("/");
    }

    render() {
        const review = this.props.review;
        return (
            <div className="res-details-container">
                <img className="reservation-img" src={review.photourl} />
                <div className="reservation-details">
                    <h3>{review.restaurant.name}</h3>
                    <div className="confirm-message">Are you sure you want to delete this review?</div>
                    <form className="cancel-res-form" onSubmit={this.handleSubmit}>
                        <button>Delete Review</button>
                        <Link to={`/restaurants/${review.restaurant.id}/reviews/${review.id}`}>Nevermind</Link>
                    </form>
                </div>

    
            </div>
        )
    }
}

export default DeleteReviewConfirmation;