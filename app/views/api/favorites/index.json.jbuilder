@favorites.each do |favorite|
    json.set! favorite.id do
        json.extract! favorite, :id, :user_id, :restaurant_id
    end
end