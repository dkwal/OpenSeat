import { connect } from "react-redux";
import EditReservationForm from "./edit_reservation_form";
import { fetchReservation, updateReservation } from "../../actions/reservation_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => ({
    reservation: state.entities.reservations[ownProps.match.params.reservationId],
    errors: state.errors.reservation
})

const mapDispatchToProps = (dispatch) => ({
    fetchReservation: reservationId => dispatch(fetchReservation(reservationId)),
    updateReservation: reservation => dispatch(updateReservation(reservation))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditReservationForm));