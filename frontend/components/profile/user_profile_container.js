import { connect } from "react-redux";
import UserProfile from "./user_profile";
import { fetchReservations } from "../../actions/reservation_actions";

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    }
}

const mapDispatchToProps = dispatch => ({
    fetchReservations: () => dispatch(fetchReservations())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);