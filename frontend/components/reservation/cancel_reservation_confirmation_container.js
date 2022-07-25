import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { deleteReservation } from "../../actions/reservation_actions";
import CancelReservationConfirmation from "./cancel_reservation_confirmation";

const mapStateToProps = (state, ownProps) => ({
    reservation: state.entities.reservations[ownProps.match.params.reservationId]
})

const mapDispatchToProps = (dispatch) => ({
    deleteReservation: reservationId => dispatch(deleteReservation(reservationId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CancelReservationConfirmation));