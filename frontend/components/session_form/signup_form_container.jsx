import { connect } from "react-redux";
import React from "react";
import { signup } from "../../actions/session_actions";
import SignupForm from "./signup_form";
import { openModal, closeModal } from "../../actions/modal_actions";
import { removeSessionErrors } from "../../actions/session_actions";

const mapStateToProps = ( {errors} ) => {
    return {
        errors: errors.session,
        formType: "signup"
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal("login"))}>
                Log in
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        removeSessionErrors: () => dispatch(removeSessionErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);