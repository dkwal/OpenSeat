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
import { ProtectedRoute, AuthRoute } from "../util/route_util";
import UserProfileContainer from "./profile/user_profile_container";
import CreateReviewFormContainer from "./review/create_review_form_container";
import EditReviewFormContainer from "./review/edit_review_form_container";
import DeleteReviewConfirmationContainer from "./review/delete_review_confirmation_container";
import ProfileSavedRestaurantsContainer from "./profile/profile_saved_restaurants_container"


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
            <Route exact path="/restaurants/:restaurantId" component={RestaurantShowContainer} />
            <Route path="/reservations/new/:user_id/:restaurant_id/:party_size/:date/:time" component={CreateReservationFormContainer} />
            <Route path="/reservations/:reservationId/edit" component={EditReservationFormContainer} />
            <Route exact path="/reservations/:reservationId" component={ReservationShowContainer}/>
            <Route path="/reservations/:reservationId/cancel" component={CancelReservationConfirmationContainer}/>
            <ProtectedRoute exact path="/users/:user_id/profile" component={UserProfileContainer}/>
            <ProtectedRoute exact path="/users/:user_id/profile/saved" component={ProfileSavedRestaurantsContainer} />
            <ProtectedRoute exact path="/restaurants/:restaurantId/reviews" component={CreateReviewFormContainer}/>
            <ProtectedRoute path="/restaurants/:restaurantId/reviews/:reviewId" component={EditReviewFormContainer}/>
            <ProtectedRoute path="/reviews/:reviewId/delete" component={DeleteReviewConfirmationContainer}/>
        </Switch>
    </div>
)

export default App;