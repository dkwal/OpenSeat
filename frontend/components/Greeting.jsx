import React from "react";
import { withRouter } from "react-router-dom";
import { fetchReservations } from "../actions/reservation_actions";

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.demoUser = this.demoUser.bind(this);
        this.redirectToProfile = this.redirectToProfile.bind(this);
        this.sessionLinks = this.sessionLinks.bind(this);
        this.personalGreeting = this.personalGreeting.bind(this);
    }
    demoUser = () => {
        const user = {email: "demo@user.com", password: "demouser"};
        this.props.login(user);
    }

    redirectToProfile = (currentUser) => (
        this.props.history.push(`/users/${currentUser.id}/profile`)
    )

    sessionLinks = () => (
        <nav className="login-signup">
            <button className="signup-button" onClick={() => this.props.openModal("signup")}>Sign up</button>
            <button className="login-button" onClick={() => this.props.openModal("login")}>Sign in</button>
            <button className="demo-login-button" onClick={() => this.demoUser()}>Demo</button>
        </nav>
    )
    
    personalGreeting = () => (
        <div className="header-group">
            <h2 className="header-name">Welcome, {this.props.currentUser.first_name}!</h2>
            <i className="fa-regular fa-user" onClick={() => this.redirectToProfile(this.props.currentUser)}></i>
            <button className="logout-button" onClick={this.props.logout}>Log out</button>
        </div>
    )

    render() {
        return this.props.currentUser ? this.personalGreeting() : this.sessionLinks();
    }
}

// const Greeting = ({ currentUser, logout, openModal, login }) => {
//     const demoUser = () => {
//         const user = {email: "demo@user.com", password: "demouser"};
//         login(user);
//     }

//     const redirectToProfile = (currentUser) => (
//         history.push(`/users/${currentUser.id}/profile`)
//     )

//     const sessionLinks = () => (
//         <nav className="login-signup">
//             <button className="signup-button" onClick={() => openModal("signup")}>Sign up</button>
//             <button className="login-button" onClick={() => openModal("login")}>Sign in</button>
//             <button className="demo-login-button" onClick={() => demoUser()}>Demo</button>
//         </nav>
//     )
    
//     const personalGreeting = () => (
//         <div className="header-group">
//             <h2 className="header-name">Welcome, {currentUser.first_name}!</h2>
//             <i className="fa-regular fa-user" onClick={redirectToProfile(currentUser)}></i>
//             <button className="logout-button" onClick={logout}>Log out</button>
//         </div>
//     )
//     return currentUser ? personalGreeting() : sessionLinks();
// }

export default withRouter(Greeting);