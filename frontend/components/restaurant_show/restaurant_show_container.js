import { connect } from "react-redux";
import { fetchFavorites, createFavorite, deleteFavorite } from "../../actions/favorite_actions";
import { fetchRestaurant } from "../../actions/restaurant_actions";
import { fetchRestaurantReviews } from "../../actions/review_actions";
import { openModal } from "../../actions/modal_actions";
import RestaurantShow from "./restaurant_show";

const mapStateToProps = (state, {match}) => ({
    restaurant: state.entities.restaurants[match.params.restaurantId],
    currentUser: Object.values(state.entities.users)[0],
    userFavorites: Object.values(state.entities.favorites),
    reviews: Object.values(state.entities.reviews)
})

const mapDispatchToProps = (dispatch, {match}) => ({
    fetchRestaurant: () => dispatch(fetchRestaurant(match.params.restaurantId)),
    fetchFavorites: (userId) => dispatch(fetchFavorites(userId)),
    createFavorite: (favorite) => dispatch(createFavorite(favorite)),
    deleteFavorite: (favoriteId) => dispatch(deleteFavorite(favoriteId)),
    fetchRestaurantReviews: () => dispatch(fetchRestaurantReviews(match.params.restaurantId)),
    openModal: () => dispatch(openModal("login"))
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);