# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(first_name: 'Demo user',
    last_name: 'placeholder',
    email: 'demo@user.com',
    password:  'demouser'
)
Restaurant.create(name: 'Default Restaurant',
    description: "it ain't much, but it get's the job done",
    address: "123 default lane, default city, DF 12345 USA",
    phone_number: "123-456-7890",
    menu: "www.menu.com",
    price_range: "$$$$",
    food_type: "American"
)

Restaurant.create(name: 'Default Restaurant 2',
    description: "it ain't much, but it get's the job done",
    address: "123 default lane, default city, DF 12345 USA",
    phone_number: "123-456-7890",
    menu: "www.menu.com",
    price_range: "$$$$",
    food_type: "American"
)

Restaurant.create(name: 'Default Restaurant 3',
    description: "it ain't much, but it get's the job done",
    address: "123 default lane, default city, DF 12345 USA",
    phone_number: "123-456-7890",
    menu: "www.menu.com",
    price_range: "$$$$",
    food_type: "American"
)