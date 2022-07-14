class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :address, null: false
      t.string :phone_number, null: false
      t.string :menu, null: false
      t.string :price_range, null: false
      t.string :food_type, null: false
      t.timestamps
    end
  add_index :restaurants, :name, unique: true
  end
end
