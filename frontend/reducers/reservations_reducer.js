import { RECEIVE_RESERVATION, REMOVE_RESERVATION, RECEIVE_RESERVATIONS } from "../actions/reservation_actions";

const reservationsReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_RESERVATIONS:
            return action.reservations;
        case RECEIVE_RESERVATION:
            return action.reservation;
        case REMOVE_RESERVATION:
            delete newState[action.reservationId];
            return newState;
        default:
            return state;
    }
}

export default reservationsReducer;