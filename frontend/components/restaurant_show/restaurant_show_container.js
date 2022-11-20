import { connect } from "react-redux";
import { fetchFavorites, createFavorite, deleteFavorite } from "../../actions/favorite_actions";
import { fetchRestaurant } from "../../actions/restaurant_actions";
import RestaurantShow from "./restaurant_show";

const mapStateToProps = (state, {match}) => ({
    restaurant: state.entities.restaurants[match.params.restaurantId],
    currentUser: Object.values(state.entities.users)[0],
    userFavorites: Object.values(state.entities.favorites)
})

const mapDispatchToProps = (dispatch, {match}) => ({
    fetchRestaurant: () => dispatch(fetchRestaurant(match.params.restaurantId)),
    fetchFavorites: (userId) => dispatch(fetchFavorites(userId)),
    createFavorite: (favorite) => dispatch(createFavorite(favorite)),
    deleteFavorite: (favoriteId) => dispatch(deleteFavorite(favoriteId))
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);