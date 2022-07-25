import { createElement } from "react";
import { combineReducers } from "redux";
import reservationsReducer from "./reservations_reducer";
import restaurantsReducer from "./restaurants_reducer";

import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  restaurants: restaurantsReducer,
  reservations: reservationsReducer
});

export default entitiesReducer;