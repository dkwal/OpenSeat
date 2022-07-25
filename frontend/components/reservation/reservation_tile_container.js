import { connect } from "react-redux";
import ReservationTile from "./reservation_tile";
import { withRouter } from "react-router-dom";


const mapStateToProps = (state, ownProps) => {
    let userId;
    if (Object.values(state.entities.users).length != 0) {
        userId = Object.values(state.entities.users)[0].id;
    } else {
        userId = 0;
    }
    return {
        userId: userId,
        restaurantId: ownProps.restaurantId
    }
}

export default withRouter(connect(mapStateToProps, null)(ReservationTile));