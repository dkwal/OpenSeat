import * as APIUtil from "../util/review_api_util";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";

const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
})

const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
})

const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
})

export const receiveReviewErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
})

export const fetchReviews = (userId) => dispatch => {
    return APIUtil.fetchReviews(userId)
        .then(reviews => (dispatch(receiveReviews(reviews))))
}

export const fetchReview = (reviewId) => dispatch => {
    return APIUtil.fetchReview(reviewId)
        .then(review => dispatch(receiveReview(review)))
}

export const createReview = (review, restaurantId) => dispatch => {
    return APIUtil.createReview(review, restaurantId)
        .then(review => dispatch(receiveReview(review)))
}

export const updateReview = (review) => dispatch => {
    return APIUtil.updateReview(review)
        .then(review => dispatch(receiveReview(review)))
}

export const deleteReview = (reviewId) => dispatch => {
    return APIUtil.deleteReview(reviewId)
        .then(review => dispatch(removeReview(review.id)))
}