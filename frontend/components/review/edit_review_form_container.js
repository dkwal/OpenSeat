import { connect } from "react-redux";
import { updateReview, fetchReview } from "../../actions/review_actions";
import EditReviewForm from "./edit_review_form";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
    const params = ownProps.match.params;
    const restaurantId = params.restaurantId;
    const restaurant = state.entities.restaurants[restaurantId];
    const userId = Object.values(state.entities.users)[0].id;

    return {
        restaurant: restaurant,
        userId: userId
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateReview: (review) => dispatch(updateReview(review)),
    fetchReview: () => dispatch(fetchReview(ownProps.match.params.reviewId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditReviewForm));