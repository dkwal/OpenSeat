import { connect } from "react-redux";

import { fetchRestaurant } from "../../actions/restaurant_actions";
import RestaurantShow from "./restaurant_show";

const mapStateToProps = (state, {match}) => ({
    restaurant: state.entities.restaurants[match.params.restaurantId]
})

const mapDispatchToProps = (dispatch, {match}) => ({
    fetchRestaurant: () => dispatch(fetchRestaurant(match.params.restaurantId))
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);