import React from "react";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        this.props.removeSessionErrors();
    }

    render() {
        return (
            <div className="login-form-container">
                <h2>Welcome to OpenSeat!</h2>
                <h3>Enter your details below to sign in.</h3>
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    {this.renderErrors()}
                    <div className="login-form">
                        <div className="login-inputs-container">
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
                        <input className="session-submit" type="submit" value="Log in" />
                        <div className="modal-redirect">
                           Need an account?{this.props.otherForm}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginForm;