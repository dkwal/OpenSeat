import { connect } from "react-redux";
import EditReservationForm from "./edit_reservation_form";
import { fetchReservation, updateReservation } from "../../actions/reservation_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => ({
    errors: state.errors.reservation
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchReservation: () => dispatch(fetchReservation(ownProps.match.params.reservationId)),
    updateReservation: reservation => dispatch(updateReservation(reservation))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditReservationForm));