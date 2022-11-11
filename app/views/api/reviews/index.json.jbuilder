@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :restaurant_id
    end
end