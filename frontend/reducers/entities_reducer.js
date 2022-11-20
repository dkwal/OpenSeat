import { combineReducers } from "redux";
import reservationsReducer from "./reservations_reducer";
import restaurantsReducer from "./restaurants_reducer";
import reviewsReducer from "./reviews_reducer";
import usersReducer from "./users_reducer";
import favoritesReducer from "./favorites_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  restaurants: restaurantsReducer,
  reservations: reservationsReducer,
  reviews: reviewsReducer,
  favorites: favoritesReducer
});

export default entitiesReducer;