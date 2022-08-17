json.extract! @restaurant, :id, :name, :description, :address, :phone_number, :menu, :price_range, :food_type

json.reviews do
    @restaurant.reviews.each do |review|
        json.set! review.id do 
            json.extract! review, :id, :body, :overall_rating, :food_rating, :service_rating, :ambience_rating
        end
    end
end

json.photourl url_for(@restaurant.photo)