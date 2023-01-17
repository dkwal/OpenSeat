json.set! @review.id do
    json.extract! @review, :id, :restaurant_id, :user_id, :body, :overall_rating, :food_rating, :service_rating, :ambience_rating, :value_rating
    json.user @review.user
    json.restaurant @review.restaurant
    json.photourl url_for(@review.restaurant.photo)
end