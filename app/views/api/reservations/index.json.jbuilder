@reservations.each do |reservation|
    json.set! reservation.id do
        json.extract! reservation, :id, :first_name, :last_name, :date, :party_size, :time
        json.restaurant reservation.restaurant
        json.photourl url_for(reservation.restaurant.photo)
    end
end