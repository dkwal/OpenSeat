import React from "react";
import { Link } from "react-router-dom";
import ProfileFavorite from "./profile_favorite";

class ProfileSavedRestaurants extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: []
        }
        this.removeFavorite = this.removeFavorite.bind(this);
    }

    componentDidMount() {
        this.props.fetchFavorites(this.props.match.params.user_id)
            .then(res => this.setState({favorites: Object.values(res.favorites)}))
    }

    removeFavorite(id) {
        const newFavorites = this.state.favorites.filter(favorite => favorite.id !== id);
        this.setState({favorites: newFavorites});
        this.props.deleteFavorite(id);
    }

    render() {
        const favorites = this.state.favorites;
        let favoritesList;
        if (favorites.length === 0) {
            favoritesList = (<div className="no-favorites">You do not have any favorited restaurants.</div>)
        } else {
            favoritesList = (
                <ul className="saved-restaurants-index">
                    {favorites.map(favorite => (
                        <li key={favorite.id}>
                            <ProfileFavorite favorite={favorite} deleteFavorite={this.removeFavorite} />
                        </li>
                    ))}
                </ul>
            )
        }
        return(
        <div className="profile-container">
                <ul className="profile-links">
                    <li>
                        <Link to={`/users/${this.props.match.params.user_id}/profile`}>Reservations</Link>
                    </li>
                    <li className="current-page-link">Saved Restaurants</li>
                </ul>
                <div className="profile-reservations-container">
                    <h2 className="favorites-list-header">Favorited Restaurants</h2>
                    {favoritesList}
                </div>
            </div>
        )
    }
}

export default ProfileSavedRestaurants;