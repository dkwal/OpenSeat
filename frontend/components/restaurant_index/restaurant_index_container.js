import { connect } from "react-redux";
import RestaurantIndex from "./restaurant_index";
import { fetchRestaurants } from "../../actions/restaurant_actions";

const mapStateToProps = ({ entities }) => ({
    restaurants: Object.values(entities.restaurants),
    currentUserId: Object.values(entities.users)[0].id
})

const mapDispatchToProps = dispatch => ({
    fetchRestaurants: dispatch(fetchRestaurants())
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex);