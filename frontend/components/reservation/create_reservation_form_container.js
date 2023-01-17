import { connect } from "react-redux";
import { createReservation } from "../../actions/reservation_actions";
import CreateReservationForm from "./create_reservation_form";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
    const params = ownProps.match.params;
    const restaurantId = params.restaurant_id;
    const partySize = params.party_size;
    const restaurant = state.entities.restaurants[restaurantId];
    
    let userId;
    if (params.user_id === '0') {
        userId = null;
    } else {
        userId = params.user_id;
    }
    
    return {
        reservation: {
            first_name: "",
            last_name: "",
            phone_number: "",
            email: "",
            user_id: userId,
            restaurant_id: restaurantId,
            party_size: partySize,

        },
        restaurant: restaurant
    }
}

const mapDispatchToProps = dispatch => ({
    submitReservation: (reservation) => dispatch(createReservation(reservation))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateReservationForm));