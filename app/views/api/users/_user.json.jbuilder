json.extract! user, :id, :first_name, :last_name, :email

json.reservations do 
    user.reservations.each do |reservation|
        json.set! reservation.id do 
            json.extract! reservation, :id, :restaurant_id, :date, :party_size, :phone_number, :email, :time
            json.restaurant reservation.restaurant
            json.photourl url_for(reservation.restaurant.photo)
        end
    end
end

