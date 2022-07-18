import React from "react";
import GreetingContainer from "./greeting_container";
import Modal from "./modal"
import RestaurauntIndexContainer from "./restaurant_index/restaurant_index_container";
import RestaurantShowContainer from "./restaurant_show/restaurant_show_container";
import { Switch, Route } from "react-router-dom";

const App = () => (
    <div>
        <Modal />
        <header className="header">
            <h1 className="logo">OpenSeat</h1>
            <GreetingContainer />
        </header>
        <Switch>
            <Route exact path="/" component={RestaurauntIndexContainer} />
            <Route path="/restaurants/:restaurantId" component={RestaurantShowContainer} />
        </Switch>
    </div>
)

export default App;