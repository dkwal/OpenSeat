class Reservation < ApplicationRecord
    validates :restaurant_id, :first_name, :last_name, :date, :party_size, :phone_number, :email, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User,
        optional: true

    belongs_to :restaurant,
        primary_key: :id,
        foreign_key: :restaurant_id,
        class_name: :Restaurant
end
