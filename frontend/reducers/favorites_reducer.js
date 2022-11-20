import { RECEIVE_FAVORITE, RECEIVE_FAVORITES, REMOVE_FAVORITE } from "../actions/favorite_actions";

const favoritesReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_FAVORITES:
            return action.favorites;
        case RECEIVE_FAVORITE:
            newState[action.favorite.id] = action.favorite;
            return newState;
        case REMOVE_FAVORITE:
            delete newState[action.favoriteId];
            return newState;
        default:
            return state;
    }
}

export default favoritesReducer;