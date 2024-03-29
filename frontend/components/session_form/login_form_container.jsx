import { connect } from "react-redux";
import React from "react";
import { login } from "../../actions/session_actions";
import LoginForm from "./login_form";
import { openModal, closeModal } from "../../actions/modal_actions";
import { removeSessionErrors } from "../../actions/session_actions";

const mapStateToProps = ( {errors} ) => {
    return {
        errors: errors.session,
        formType: "login"
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal("signup"))}>
                Sign up
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        removeSessionErrors: () => dispatch(removeSessionErrors())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);