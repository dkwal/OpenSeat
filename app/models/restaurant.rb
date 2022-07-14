class Restaurant < ApplicationRecord
    validates :name, uniqueness: true, presence: true
    validates :description, :address, :phone_number, :menu, :price_range, :food_type, presence: true
end
