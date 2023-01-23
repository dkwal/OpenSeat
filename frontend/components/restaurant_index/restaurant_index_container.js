import { connect } from "react-redux";
import RestaurantIndex from "./restaurant_index";
import { fetchRestaurants } from "../../actions/restaurant_actions";

const mapStateToProps = ({ entities }) => ({
    restaurants: Object.values(entities.restaurants),
    currentUser: Object.values(entities.users)[0]
})

const mapDispatchToProps = dispatch => ({
    fetchRestaurants: dispatch(fetchRestaurants())
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex);