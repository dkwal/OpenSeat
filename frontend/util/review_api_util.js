export const fetchReviews = (userId) => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/reviews`
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

export const updateReview = (review) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/reviews/${review.id}`,
        data: { review }
    })
)

export const deleteReview = (id) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/reviews/${id}`
    })
)