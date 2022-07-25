# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
Restaurant.destroy_all
User.destroy_all

User.create(first_name: 'Demo user',
    last_name: 'placeholder',
    email: 'demo@user.com',
    password:  'demouser'
)
restaurant_1 = Restaurant.create(name: 'Menlo Tavern',
    description: "Welcome to Spring! Easter will be hopping in soon and we are accepting reservations now for brunch and dinner on April 17th. Chef Sal and team are busy finalizing the new spring menu, launching April 8, and the live music lineup for the courtyard is nearly complete. Speaking of the courtyard, we have a special treat for you this week. With the warm weather expected, we will offer outdoor dining from 5-9pm on Thursday and Friday, April 7 & 8.

    Breakfast is back! Start your day in a delicious way. Serving daily until 10:30am, and Saturday and Sunday until 11.
    
    Join us for Tavern Time in the bar from 4-6pm daily. Enjoy 20% off wines by the glass, draught beer, and bar bites. The bar is open from 4-10pm to enjoy handcrafted signature cocktails, beer, wine, spirits and light fair.
    
    Our beautiful dining room is open nightly from 5-9pm. Reservations are available for groups of up to six guests. For larger parties, please contact the Menlo Tavern's sales team directly at (650) 330-2794.e",
    address: "123 default lane, default city, DF 12345 USA",
    phone_number: "123-456-7890",
    menu: "www.menu.com",
    price_range: "$$$$",
    food_type: "American"
)

restaurant_2 = Restaurant.create(name: 'Matador - San Francisco',
    description: "Matado – San Francisco is a restaurant serving authentic Mexican cuisine. It offers delivery and takeout, and also provides catering services. The restaurant is recommended for lunch and dinner, and has garage and street parking. It is a good place for groups, and the attire and ambiance inside is casual. Matador – San Francisco offers full alcohol bar and the noise level during peak hours is average. The restaurant offers free WI-FI access and has outdoor seating as well. The menu at Matador – San Francisco includes classic Mexican dishes such as carnitas tacos, guacamole, mezcal with pineapple syrup and lemon, house salad with shrimp, salsa, and pozole. The waiting staff is friendly, courteous, and fast in taking orders and serving food.",
    address: "123 default lane, default city, DF 12345 USA",
    phone_number: "123-456-7890",
    menu: "www.menu.com",
    price_range: "$$$$",
    food_type: "American"
)

restaurant_3 = Restaurant.create(name: 'The Lounge & Bar at Four Seasons Embarcadero',
    description: "Located on the Lobby Level at Four Seasons San Francisco at Embarcadero, The Lounge & Bar offers breakfast and lunch daily, and hearty American dinners in the evening alongside an exceptional list of curated wines. Ideal for after-work gatherings, the bar also offers crafted cocktails, draft beers and shareable starters and entrees including the Financial District's best burger, truffle fries, and handmade pizzas. Space is also available for intimate semi-private gatherings.",
    address: "123 default lane, default city, DF 12345 USA",
    phone_number: "123-456-7890",
    menu: "www.menu.com",
    price_range: "$$$$",
    food_type: "American"
)

restaurant_4 = Restaurant.create(name: 'Aracely Cafe',
    description: "Located on Treasure Island, off the Bay Bridge that runs from San Francisco to Oakland, Aracely Cafe offers a relaxed, welcoming space which includes a large patio + garden complete with an outdoor fireplace, lounge seating, string lights, and heat lamps. As you enter the cozy interior, there are options for bar seating, table or fireplace dining.

    With a focus on local, seasonal, healthy, and delicious options, our menu offers a selection of brunch fare six days a week. We serve dinner Tuesday-Saturday to take advantage of the romantic atmosphere and views at night. All pastries and bread are made in-house.
    
    Our bar offers Sightglass coffee + espresso options, a full bar with a selection of seasonal cocktails, wine, + beer which are available for brunch and dinner.",
    address: "123 default lane, default city, DF 12345 USA",
    phone_number: "123-456-7890",
    menu: "www.menu.com",
    price_range: "$$$$",
    food_type: "American"
)

restaurant_5 = Restaurant.create(name: 'Quattro Restaurant and Bar - Four Seasons Hotel',
    description: "We are delighted to welcome guests back into Quattro to enjoy a rustic menu highlighting house made dry-aged meats, grilled dishes, and fresh pastas.

    Our menu features contemporary Italian cuisine featuring fresh ingredients and artisan products from the best sources. Attentive, unobtrusive service complements the carefully curated wine selection.
    
    The health and safety of our guests and employees is our top priority, masks are encouraged when not actively eating or drinking on our outdoor patio dining area.",
    address: "123 default lane, default city, DF 12345 USA",
    phone_number: "123-456-7890",
    menu: "www.menu.com",
    price_range: "$$$$",
    food_type: "American"
)

file_1 = URI.open('https://open-seat-seed.s3.us-west-1.amazonaws.com/restaurant-photo.jpeg')
file_2 = URI.open('https://open-seat-seed.s3.us-west-1.amazonaws.com/32348786.jpeg')
file_3 = URI.open('https://open-seat-seed.s3.us-west-1.amazonaws.com/48475190.jpeg')
file_4 = URI.open('https://open-seat-seed.s3.us-west-1.amazonaws.com/41743859.jpeg')
file_5 = URI.open('https://open-seat-seed.s3.us-west-1.amazonaws.com/41743155.jpeg')


restaurant_1.photo.attach(io: file_1, filename: 'restaurant-photo.jpeg')
restaurant_2.photo.attach(io: file_2, filename: '32348786.jpeg')
restaurant_3.photo.attach(io: file_3, filename: '48475190.jpeg')
restaurant_4.photo.attach(io: file_4, filename: '41743859.jpeg')
restaurant_5.photo.attach(io: file_5, filename: '41743155.jpeg')