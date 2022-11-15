import React from "react";

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
        return (
            <div>
                <h2>Are you sure you want to delete this review?</h2>

                <form onSubmit={this.handleSubmit}>
                    <button>Delete Review</button>
                </form>

    
            </div>
        )
    }
}

export default DeleteReviewConfirmation;