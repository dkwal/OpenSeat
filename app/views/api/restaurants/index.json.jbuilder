search_form_for(@q, url: "/api/restaurants", method: :get) do |f|

    f.label :name_cont
    f.search_field :name_cont, placeholder: 'Search...'

    f.submit

end

@restaurants.each do |restaurant|
    json.set! restaurant.id do
        json.extract! restaurant, :id, :name, :description, :address, :phone_number, :menu, :price_range, :food_type
        json.photourl url_for(restaurant.photo)
    end
end