import { connect } from "react-redux";
import UserProfile from "./user_profile";
import { fetchReservations } from "../../actions/reservation_actions";

const mapStateToProps = ({ session, entities: { users, reservations } }) => {
    return {
        currentUser: users[session.id],
        reservations: reservations
    }
}

const mapDispatchToProps = dispatch => ({
    fetchReservations: (user_id) => dispatch(fetchReservations(user_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);