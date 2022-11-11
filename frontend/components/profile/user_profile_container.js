import { connect } from "react-redux";
import UserProfile from "./user_profile";
import { fetchReservations } from "../../actions/reservation_actions";
import { fetchReviews } from "../../actions/review_actions";

const mapStateToProps = ({ session, entities: { users, reservations } }) => {
    return {
        currentUser: users[session.id],
        reservations: reservations
    }
}

const mapDispatchToProps = dispatch => ({
    fetchReservations: (user_id) => dispatch(fetchReservations(user_id)),
    fetchReviews: (userId) => dispatch(fetchReviews(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);