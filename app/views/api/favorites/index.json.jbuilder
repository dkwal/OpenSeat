@favorites.each do |favorite|
    total_score = 0.0
    num_reviews = favorite.restaurant.reviews.length
    favorite.restaurant.reviews.each do |review|
        total_score += review.overall_rating
    end
    if num_reviews == 0
        num_reviews += 1
    end
    avg_rating = total_score / num_reviews

    json.set! favorite.id do
        json.extract! favorite, :id, :user_id, :restaurant_id
        json.restaurant favorite.restaurant
        json.avg_rating avg_rating
        json.photourl url_for(favorite.restaurant.photo)
    end
end