import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign up</Link>
        </nav>
    )
    
    const personalGreeting = () => (
        <div className="header-group">
            <h2 className="header-name">Welcome, {currentUser.first_name}!</h2>
            <button className="header-button" onClick={logout}>Log out</button>
        </div>
    )
    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;