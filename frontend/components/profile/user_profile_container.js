import { connect } from "react-redux";
import UserProfile from "./user_profile";

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    }
}

export default connect(mapStateToProps, null)(UserProfile);