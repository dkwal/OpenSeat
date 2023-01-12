search_form_for(@q, url: "/api/restaurants", method: :get) do |f|

    f.label :name_cont
    f.search_field :name_cont, placeholder: 'Search...'

    f.submit

end

@restaurants.each do |restaurant|
    num_reviews = restaurant.reviews.length
    total_score = 0.0
    food_score = 0.0
    service_score = 0.0
    ambience_score = 0.0
    value_score = 0.0
    restaurant.reviews.each do |review|
        total_score += review.overall_rating
        food_score += review.food_rating
        service_score += review.service_rating
        ambience_score += review.ambience_rating
        value_score += review.value_rating
    end
    if num_reviews == 0
        num_reviews += 1
    end
    avg_rating = total_score / num_reviews
    food_rating = food_score / num_reviews
    service_rating = service_score / num_reviews
    ambience_rating = ambience_score / num_reviews
    value_rating = value_score / num_reviews

    json.set! restaurant.id do
        json.extract! restaurant, :id, :name, :description, :address, :phone_number, :menu, :price_range, :food_type
        json.photourl url_for(restaurant.photo)
        json.avg_rating avg_rating
        json.num_reviews restaurant.reviews.length
        json.food_rating food_rating
        json.service_rating service_rating
        json.ambience_rating ambience_rating
        json.value_rating value_rating
    end
end