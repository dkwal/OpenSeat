import { combineReducers } from "redux";
import reservationErrorsReducer from "./reservation_errors_reducer";
import sessionErrorsReducer from "./session_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    reservation: reservationErrorsReducer
})

export default errorsReducer;