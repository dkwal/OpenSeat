class Restaurant < ApplicationRecord
    validates :name, uniqueness: true, presence: true
    validates :description, :address, :phone_number, :menu, :price_range, :food_type, presence: true

    has_one_attached :photo

    has_many :reservations,
        primary_key: :id,
        foreign_key: :restaurant_id
end
