json.extract! @restaurant, :id, :name, :description, :address, :phone_number, :menu, :price_range, :food_type
json.photourl url_for(@restaurant.photo)