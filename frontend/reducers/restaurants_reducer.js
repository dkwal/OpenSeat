import { RECEIVE_RESTAURANTS, RECEIVE_RESTAURANT } from "../actions/restaurant_actions";

const restaurantsReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_RESTAURANTS:
            return action.restaurants;
        case RECEIVE_RESTAURANT:
            newState[action.restaurant.id] = action.restaurant;
            return newState;
        default:
            return state;
    }
}

export default restaurantsReducer;