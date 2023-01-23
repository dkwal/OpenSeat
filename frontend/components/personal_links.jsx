import React from "react";

const PersonalLinks = props => {
    return (
        <div>
            <div className="links-container">
                <div className="links-column">
                    <h3>PERSONAL LINKS</h3>
                    <a href="https://www.linkedin.com/in/danielkwallace/">My LinkedIn</a>
                    <a href="https://github.com/dkwal">My Github</a>
                </div>
                <div className="links-column">
                    <h3>ORIGINAL SITE FOR REFERENCE</h3>
                    <a href="https://www.opentable.com/">OpenTable</a>
                </div>
                <div className="links-column">
                    <h3>OTHER PROJECTS</h3>
                    <a href="https://dkwal.github.io/Wordathon/">Wordathon - A Wordle-like Game</a>
                </div>
            </div>
            <div className="portfolio-project">This website is purely a portfolio project to showcase the developer's skills.</div>
            <div className="footer-disclaimer">There is no intention to ever use this project for profit as a legitimate way to book reservations.</div>
        </div>
    )
}

export default PersonalLinks;