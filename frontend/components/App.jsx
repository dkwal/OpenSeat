import React from "react";
import GreetingContainer from "./greeting_container";
import Modal from "./modal"
import RestaurauntIndexContainer from "./restaurant_index/restaurant_index_container";
import RestaurantShowContainer from "./restaurant_show/restaurant_show_container";
import { Switch, Route, Link } from "react-router-dom";
import CreateReservationFormContainer from "./reservation/create_reservation_form_container";
import EditReservationFormContainer from "./reservation/edit_reservation_form_container";
import ReservationShowContainer from "./reservation/reservation_show_container";
import CancelReservationConfirmationContainer from "./reservation/cancel_reservation_confirmation_container";

const App = () => (
    <div>
        <Modal />
        <header className="header">
            <Link to="/" className="logo">
                <h1>OpenSeat</h1>
            </Link>
            <GreetingContainer />
        </header>
        <Switch>
            <Route exact path="/" component={RestaurauntIndexContainer} />
            <Route path="/restaurants/:restaurantId" component={RestaurantShowContainer} />
            <Route path="/reservations/new/:user_id/:restaurant_id/:party_size/:date/:time" component={CreateReservationFormContainer} />
            <Route path="/reservations/:reservationId/edit" component={EditReservationFormContainer} />
            <Route exact path="/reservations/:reservationId" component={ReservationShowContainer}/>
            <Route path="/reservations/:reservationId/cancel" component={CancelReservationConfirmationContainer}/>
        </Switch>
    </div>
)

export default App;