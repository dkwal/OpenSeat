import React from "react";

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    componentWillUnmount() {
        this.props.removeSessionErrors()
    }

    render() {
        return (
            <div className="login-form-container">
                <h2>Welcome to OpenSeat!</h2>
                <h3>Enter your details below to sign up.</h3>
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    {this.renderErrors()}
                    <div className="login-form">
                        <div className="login-inputs-container">
                            <input type="text"
                            placeholder="First name"
                            onChange={this.update("first_name")}
                            className="login-input"
                            />
                            <input type="text"
                            placeholder="Last name"
                            onChange={this.update("last_name")}
                            className="login-input"
                            />
                            <input type="text"
                            placeholder="Email"
                            onChange={this.update("email")}
                            className="login-input"
                            />
                            <input type="password"
                            placeholder="Password"
                            onChange={this.update("password")}
                            className="login-input"
                            />
                        </div>
                        <input className="session-submit" type="submit" value="Sign up"/>
                        <div className="modal-redirect">
                           Already have an account?{this.props.otherForm}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignupForm;