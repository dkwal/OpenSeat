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
        console.log("unmounting");
    }

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    Please {this.props.formType} or {this.props.otherForm}
                    {this.renderErrors()}
                    <div className="login-form">
                        <br />
                        <label>Email: 
                            <input type="text"
                            value={this.state.email}
                            onChange={this.update("email")}
                            className="login-input"
                            />
                        </label>
                        <br />
                        <label>Password: 
                            <input type="password"
                            value={this.state.password}
                            onChange={this.update("password")}
                            className="login-input"
                            />
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginForm;