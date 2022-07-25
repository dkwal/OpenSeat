class FixReservationsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :reservations, :string
    add_column :reservations, :time, :string, null: false
  end
end
