class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :user_id
      t.integer :restaurant_id, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.date :date, null: false
      t.time :string, null: false
      t.integer :party_size, null: false
      t.string :phone_number, null: false
      t.string :email, null: false


      t.timestamps
    end
    add_index :reservations, :user_id
    add_index :reservations, :restaurant_id
  end
end
