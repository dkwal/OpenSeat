search_form_for(@q, url: "/api/restaurants", method: :get) do |f|

    f.label :name_cont
    f.search_field :name_cont, placeholder: 'Search...'

    f.submit

end

@restaurants.each do |restaurant|
    num_reviews = restaurant.reviews.length
    total_score = 0.0
    restaurant.reviews.each do |review|
        total_score += review.overall_rating
    end
    if num_reviews == 0
        num_reviews += 1
    end
    avg_rating = total_score / num_reviews
    json.set! restaurant.id do
        json.extract! restaurant, :id, :name, :description, :address, :phone_number, :menu, :price_range, :food_type
        json.photourl url_for(restaurant.photo)
        json.num_reviews restaurant.reviews.length
        json.avg_rating avg_rating
    end
end