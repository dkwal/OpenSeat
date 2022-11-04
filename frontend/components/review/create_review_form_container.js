import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions";
import { fetchRestaurant } from "../../actions/restaurant_actions";
import CreateReviewForm from "./create_review_form";
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
    submitReview: (review) => dispatch(createReview(review)),
    fetchRestaurant: () => dispatch(fetchRestaurant(ownProps.match.params.restaurantId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateReviewForm));