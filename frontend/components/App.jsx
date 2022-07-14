import React from "react";
import GreetingContainer from "./greeting_container";
import Modal from "./modal"
import RestaurauntIndexContainer from "./restaurant_index/restaurant_index_container";

const App = () => (
    <div>
        <Modal />
        <header className="header">
            <h1 className="logo">OpenSeat</h1>
            <GreetingContainer />
        </header>
        <div className="search-bar">Search bar will go here</div>
        <h2 className="restaurants-header">Recommended restaurants</h2>
        <RestaurauntIndexContainer />
    </div>
)

export default App;