import ReservationShow from "./reservation_show";
import { fetchReservation } from "../../actions/reservation_actions";
import { connect } from "react-redux";

const mapStateToProps = ({ entities }, { match }) => ({
    reservation: entities.reservations[match.params.reservationId]
})

const mapDispatchToProps = (dispatch, { match }) => ({
    fetchReservation: () => dispatch(fetchReservation(match.params.reservationId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReservationShow);