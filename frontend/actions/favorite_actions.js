import * as APIUtil from "../util/favorite_api_util"

export const RECEIVE_FAVORITES = "RECEIVE_FAVORITES";
export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

const receiveFavorites = favorites => ({
    type: RECEIVE_FAVORITES,
    favorites
})

const receiveFavorite = (favorite) => ({
    type: RECEIVE_FAVORITE,
    favorite
})

const removeFavorite = (favoriteId) => ({
    type: REMOVE_FAVORITE,
    favoriteId
})

export const fetchFavorites = (userId) => dispatch => (
    APIUtil.fetchFavorites(userId)
        .then(favorites => (
            dispatch(receiveFavorites(favorites))
        ))
)

export const createFavorite = (favorite) => dispatch => (
    APIUtil.createFavorite(favorite)
        .then(favorite => dispatch(receiveFavorite(favorite)))
)

export const deleteFavorite = (favoriteId) => dispatch => (
    APIUtil.deleteFavorite(favoriteId)
        .then(favorite => dispatch(removeFavorite(favorite.id)))
)