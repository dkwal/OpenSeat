import { connect } from "react-redux";
import ProfileSavedRestaurants from "./profile_saved_restaurants";
import { fetchFavorites, deleteFavorite } from "../../actions/favorite_actions";

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({
    fetchFavorites: userId => dispatch(fetchFavorites(userId)),
    deleteFavorite: id => dispatch(deleteFavorite(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSavedRestaurants);