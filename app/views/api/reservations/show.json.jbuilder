json.set! @reservation.id do
    json.extract! @reservation, :id, :date, :first_name, :last_name, :party_size, :phone_number, :email, :time, :user_id, :restaurant_id
    json.photourl url_for(@reservation.restaurant.photo)
    json.name @reservation.restaurant.name
end