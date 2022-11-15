import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { deleteReview } from "../../actions/review_actions";
import DeleteReviewConfirmation from "./delete_review_confirmation";

const mapStateToProps = (state, ownProps) => ({
    review: state.entities.reviews[ownProps.match.params.reviewId]
})

const mapDispatchToProps = (dispatch) => ({
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeleteReviewConfirmation));