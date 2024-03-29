export const fetchReviews = (userId) => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/reviews`
    })
)

export const fetchRestaurantReviews = restaurantId => (
    $.ajax({
        method: 'GET',
        url: `/api/restaurants/${restaurantId}/reviews`
    })
)

export const fetchReview = (id) => (
    $.ajax({
        method: 'GET',
        url: `api/reviews/${id}`
    })
)

export const createReview = (review, restaurantId) => (
    $.ajax({
        method: 'POST',
        url: `/api/restaurants/${restaurantId}/reviews`,
        data: { review }
    })
)

export const updateReview = (review, restaurantId) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/restaurants/${restaurantId}/reviews/${review.id}`,
        data: { review }
    })
)

export const deleteReview = (id) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/reviews/${id}`
    })
)