import { connect } from "react-redux";
import { openModal } from "../actions/modal_actions";
import { logout, login } from "../actions/session_actions";
import Greeting from "./Greeting";

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user)),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);