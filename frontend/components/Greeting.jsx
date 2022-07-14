import React from "react";

const Greeting = ({ currentUser, logout, openModal, login }) => {
    const demoUser = () => {
        const user = {email: "demo@user.com", password: "demouser"};
        login(user);
    }

    const sessionLinks = () => (
        <nav className="login-signup">
            <button className="signup-button" onClick={() => openModal("signup")}>Sign up</button>
            <button className="login-button" onClick={() => openModal("login")}>Sign in</button>
            <button className="demo-login-button" onClick={() => demoUser()}>Demo</button>
        </nav>
    )
    
    const personalGreeting = () => (
        <div className="header-group">
            <h2 className="header-name">Welcome, {currentUser.first_name}!</h2>
            <button className="logout-button" onClick={logout}>Log out</button>
        </div>
    )
    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;