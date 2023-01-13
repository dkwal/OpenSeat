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
    description: "Welcome to Spring! Easter will be hopping in soon and we are accepting reservations now for brunch and dinner on April 17th. Chef Sal and team are busy finalizing the new spring menu, launching April 8, and the live music lineup for the courtyard is nearly complete. Speaking of the courtyard, we have a special treat for you this week. With the warm weather expected, we will offer outdoor dining from 5-9pm on Thursday and Friday, April 7 & 8.\n\n

    Breakfast is back! Start your day in a delicious way. Serving daily until 10:30am, and Saturday and Sunday until 11.
    
    Join us for Tavern Time in the bar from 4-6pm daily. Enjoy 20% off wines by the glass, draught beer, and bar bites. The bar is open from 4-10pm to enjoy handcrafted signature cocktails, beer, wine, spirits and light fair.\n\n
    
    Our beautiful dining room is open nightly from 5-9pm. Reservations are available for groups of up to six guests. For larger parties, please contact the Menlo Tavern's sales team directly at (650) 330-2794.e",
    address: "123 default lane, default city, DF 12345 USA",
    phone_number: "123-456-7890",
    menu: "www.menu.com",
    price_range: "$$$",
    food_type: "American"
)

restaurant_2 = Restaurant.create(name: 'Matador - San Francisco',
    description: "Matado – San Francisco is a restaurant serving authentic Mexican cuisine. It offers delivery and takeout, and also provides catering services. The restaurant is recommended for lunch and dinner, and has garage and street parking. It is a good place for groups, and the attire and ambiance inside is casual. Matador – San Francisco offers full alcohol bar and the noise level during peak hours is average. The restaurant offers free WI-FI access and has outdoor seating as well. The menu at Matador – San Francisco includes classic Mexican dishes such as carnitas tacos, guacamole, mezcal with pineapple syrup and lemon, house salad with shrimp, salsa, and pozole. The waiting staff is friendly, courteous, and fast in taking orders and serving food.",
    address: "123 default lane, default city, DF 12345 USA",
    phone_number: "123-456-7890",
    menu: "www.menu.com",
    price_range: "$$$",
    food_type: "Mexican"
)

restaurant_3 = Restaurant.create(name: 'The Lounge & Bar at Four Seasons Embarcadero',
    description: "Located on the Lobby Level at Four Seasons San Francisco at Embarcadero, The Lounge & Bar offers breakfast and lunch daily, and hearty American dinners in the evening alongside an exceptional list of curated wines. Ideal for after-work gatherings, the bar also offers crafted cocktails, draft beers and shareable starters and entrees including the Financial District's best burger, truffle fries, and handmade pizzas. Space is also available for intimate semi-private gatherings.",
    address: "123 default lane, default city, DF 12345 USA",
    phone_number: "123-456-7890",
    menu: "www.menu.com",
    price_range: "$$$",
    food_type: "Californian"
)

restaurant_4 = Restaurant.create(name: 'Aracely Cafe',
    description: "Located on Treasure Island, off the Bay Bridge that runs from San Francisco to Oakland, Aracely Cafe offers a relaxed, welcoming space which includes a large patio + garden complete with an outdoor fireplace, lounge seating, string lights, and heat lamps. As you enter the cozy interior, there are options for bar seating, table or fireplace dining.\n\n

    With a focus on local, seasonal, healthy, and delicious options, our menu offers a selection of brunch fare six days a week. We serve dinner Tuesday-Saturday to take advantage of the romantic atmosphere and views at night. All pastries and bread are made in-house.\n\n
    
    Our bar offers Sightglass coffee + espresso options, a full bar with a selection of seasonal cocktails, wine, + beer which are available for brunch and dinner.",
    address: "123 default lane, default city, DF 12345 USA",
    phone_number: "123-456-7890",
    menu: "www.menu.com",
    price_range: "$$",
    food_type: "Californian"
)

restaurant_5 = Restaurant.create(name: 'Quattro Restaurant and Bar - Four Seasons Hotel',
    description: "We are delighted to welcome guests back into Quattro to enjoy a rustic menu highlighting house made dry-aged meats, grilled dishes, and fresh pastas.\n\n

    Our menu features contemporary Italian cuisine featuring fresh ingredients and artisan products from the best sources. Attentive, unobtrusive service complements the carefully curated wine selection.\n\n
    
    The health and safety of our guests and employees is our top priority, masks are encouraged when not actively eating or drinking on our outdoor patio dining area.",
    address: "123 default lane, default city, DF 12345 USA",
    phone_number: "123-456-7890",
    menu: "www.menu.com",
    price_range: "$$$",
    food_type: "Italian"
)

restaurant_6 = Restaurant.create(name: 'True Food Kitchen - Palo Alto',
    description: "True Food Kitchen was founded in 2008 by Dr. Andrew Weil, world renowned Doctor of integrated medicine and creator of the anti-inflammatory food pyramid, with one simple purpose – to create a restaurant that serves delicious food and drinks without compromising on taste for health, or health for taste. Each carefully selected ingredient is crafted by a passionate culinary team to create meaningful food and drinks that are intentionally delicious and intentionally healthy. So you can cultivate your own food journey and trust that what you’re putting in your body is doing something good for you. True Food serves a variety of chef-driven dishes, craft cocktails and freshly pressed refreshers for lunch, dinner and weekend brunch made with ingredients from top purveyors who help reconnect the natural bounty of the planet with the food that’s on your plate.",
    address: "123 default lane, default city, DF 12345 USA",
    phone_number: "123-456-7890",
    menu: "www.menu.com",
    price_range: "$$$",
    food_type: "American"
)

restaurant_7 = Restaurant.create(name: 'Sundance The Steakhouse',
    description: "Since its opening in 1974, prime steaks and martinis have never gone out of style at this Palo Alto institution. The atmosphere is very clubby with fireplaces, dark wood, sports memorabilia and plush leather booths tucked into the many nooks throughout the dining room. Famous for their slow-roasted prime rib & hand-cut U.S.D.A Prime Steaks, they also offer fresh seafood, cold water lobster tail & succulent shellfish. The 20 oz. Bone-In Rib eye Steak is the Boss’ Favorite while the Double Cut Filet Mignon runs a close second. Sundance is respected for serving the best food money can buy coupled with value & simplicity – a welcome relief for serious food & steak aficionados. The menu is supported by an award-winning wine list that features over 400 selections focusing on highly allocated Napa Valley Cabernets. Exceptional ratings & numerous restaurant awards rank Sundance the Steakhouse as a true dining destination.",
    address: "123 default lane, default city, DF 12345 USA",
    phone_number: "123-456-7890",
    menu: "www.menu.com",
    price_range: "$$$$",
    food_type: "Steakhouse"
)

restaurant_8 = Restaurant.create(name: 'The Village Pub',
    description: "We are open for indoor and outdoor dining, takeout, and delivery daily!\n\n

    This beloved Woodside landmark brings destination dining to Silicon Valley. The Village Pub is rich with a sense of heritage and authenticity. The warm and elegant ambiance is the perfect backdrop for Chef Mark Sullivan's Contemporary American cuisine with Classic French roots.",
    address: "123 default lane, default city, DF 12345 USA",
    phone_number: "123-456-7890",
    menu: "www.menu.com",
    price_range: "$$$",
    food_type: "American"
)

restaurant_9 = Restaurant.create(name: 'Rangoon Ruby Burmese Cuisine - Palo Alto',
    description: "Rangoon Ruby was birthed from a desire to bring authentic Burmese food to the great people in Silicon Valley & the San Francisco Bay Area.\n\n

    With accomplished chefs proficient in all of the specialties that make Burmese cuisine sought after by food aficionados, Rangoon Ruby is fast striking a chord with diners looking for a fresh, modern approach to one of Asia’s up and coming popular cuisines.\n\n
    
    Influenced by Indian, Thai, and Chinese cooking, our Burmese menu is complemented by an exquisite wine selection and hand-selected draft beer to quench your thirst.\n\n
    
    At Rangoon Ruby, we pride ourselves in going the extra mile to bring you the ultimate dining experience. From our warm service staff to an extensive menu of outstanding dishes and artfully designed interior with upscale ambiance, it is our mission to elevate your experience with the delights of Burmese cuisine.",
    address: "123 default lane, default city, DF 12345 USA",
    phone_number: "123-456-7890",
    menu: "www.menu.com",
    price_range: "$$",
    food_type: "Burmese"
)

restaurant_10 = Restaurant.create(name: 'Mantra India',
    description: "Welcome to Mantra India, a Fine dining Indian Restaurant and Bar in the heart of Mountain View. The ambiance of the restaurant is designed to be comfortable and contemporary. With a team of experienced chefs and managers, the Mantra India team is dedicated to customer service and have an innate passion for the restaurant business.\n\n

    At Mantra India we serve both vegetarian and non-vegetarian food. Our chefs are trained and well versed with North Indian Mughalai cuisine, and Punjabi traditional village style cooking. To compliment the classy ambiance and exotic foods, we also boast of an exceptional selection of cocktails, beers, fine wine, and traditional Indian beverages.\n\n
    
    At Mantra India, we use natural, organic and fresh ingredients in our cooking. We source our vegetables and other ingredients locally through the local farmers network in and around Bay Area.",
    address: "123 default lane, default city, DF 12345 USA",
    phone_number: "123-456-7890",
    menu: "www.menu.com",
    price_range: "$$",
    food_type: "Indian"
)

restaurant_11 = Restaurant.create(name: 'Osteria',
    description: "Our vision is to insure a quality dining every time you eat with us. Osteria's purpose is to provide 'Culinary Contentment.' Whether you are choosing to enjoy an Osteria meal at home, your business via delivery, or in our dinning room, it is our pleasure to assist you. We believe in preparing fresh, whole food, as an essential to our customer's well-being. We are focused at providing you, our family and friends, with a traditional Tuscan cuisine, which pleases the palate is healthy, and progressive. Whether you are gathering with family, friends, co-workers, or entertaining clients, we happily offer our assistance. It is a privilege to serve you, grazie!",
    address: "123 default lane, default city, DF 12345 USA",
    phone_number: "123-456-7890",
    menu: "www.menu.com",
    price_range: "$$",
    food_type: "Italian"
)

restaurant_12 = Restaurant.create(name: 'Lumi',
    description: "Featuring world-renowned celebrity chef Akira Back, Lumi is an energetic and upscale rooftop experience serving innovative Japanese fare and sushi accompanied by handcrafted libations in a vividly unique atmosphere.",
    address: "123 default lane, default city, DF 12345 USA",
    phone_number: "123-456-7890",
    menu: "www.menu.com",
    price_range: "$$$",
    food_type: "Japanese"
)

restaurant_13 = Restaurant.create(name: 'Son & Garden - Palo Alto',
    description: "Meet Chef Kasem S, Business Owner. Son & Garden is our newest venture from Farmhouse Kitchen Family. We hope to brighten your day with our colorful, delicious and thoughtful creations. As always, we do not provide anything less than a perfect experience. #sonandgarden #bestbreakfast #brunch #breakfast restaurant",
    address: "123 default lane, default city, DF 12345 USA",
    phone_number: "123-456-7890",
    menu: "www.menu.com",
    price_range: "$$$",
    food_type: "Breakfast"
)

restaurant_14 = Restaurant.create(name: 'TAVERNA',
    description: "For centuries, a taverna has been a neighborhood gathering place where friends can meet to eat, drink and enjoy life. Taverna co-founders Thanasis Pashalidis and Hakan Bala were raised with a shared ethical compass, which the Greeks call \"philotimo\" or \"love of honor\". Family and friends are their ingredients of life, and they believe that nutrition, happiness and health are all directly correlated. Both partners have been culturally influenced by the remedies of the old world and incorporate them into the lifestyle of Taverna. Both have an \"ethos\" that drives them and inspires others to live fully, which they consider the flavor of life's success. They understand that life is to be enjoyed and that time is of the essence. They are aware that every day is a gift.\n\n

    Taverna has been created to make people happy and feel alive.",
    address: "123 default lane, default city, DF 12345 USA",
    phone_number: "123-456-7890",
    menu: "www.menu.com",
    price_range: "$$$",
    food_type: "Greek"
)

restaurant_15 = Restaurant.create(name: 'Cascal',
    description: "Serving spirited Pan-Latin cuisine, Cascal is a place to meet and linger with friends over exotic cocktails and enticing foods with bold flavors and personality from Spain and Latin-America.We have indoor and outdoor dining available. Reservations are encouraged. Take-out tapas, paella, cocktails, virgin mojitos and 30% off wine are available for pickup Tue-Sun from 11:30am-8:00pm. Online ordering and gift cards available at www.cascalrestaurant.com.",
    address: "123 default lane, default city, DF 12345 USA",
    phone_number: "123-456-7890",
    menu: "www.menu.com",
    price_range: "$$",
    food_type: "Tapas"
)

file_1 = URI.open('https://open-seat-seed.s3.us-west-1.amazonaws.com/restaurant-photo.jpeg')
file_2 = URI.open('https://open-seat-seed.s3.us-west-1.amazonaws.com/32348786.jpeg')
file_3 = URI.open('https://open-seat-seed.s3.us-west-1.amazonaws.com/48475190.jpeg')
file_4 = URI.open('https://open-seat-seed.s3.us-west-1.amazonaws.com/41743859.jpeg')
file_5 = URI.open('https://open-seat-seed.s3.us-west-1.amazonaws.com/41743155.jpeg')
file_6 = URI.open('https://open-seat-seed.s3.us-west-1.amazonaws.com/25161707.jpeg')
file_7 = URI.open('https://open-seat-seed.s3.us-west-1.amazonaws.com/24862703.jpeg')
file_8 = URI.open('https://open-seat-seed.s3.us-west-1.amazonaws.com/31853822.jpeg')
file_9 = URI.open('https://open-seat-seed.s3.us-west-1.amazonaws.com/32413056.jpeg')
file_10 = URI.open('https://open-seat-seed.s3.us-west-1.amazonaws.com/31302139.jpeg')
file_11 = URI.open('https://open-seat-seed.s3.us-west-1.amazonaws.com/25544914.jpeg')
file_12 = URI.open('https://open-seat-seed.s3.us-west-1.amazonaws.com/47117581.png')
file_13 = URI.open('https://open-seat-seed.s3.us-west-1.amazonaws.com/50983838.jpeg')
file_14 = URI.open('https://open-seat-seed.s3.us-west-1.amazonaws.com/29886999.jpeg')
file_15 = URI.open('https://open-seat-seed.s3.us-west-1.amazonaws.com/27185451.jpeg')


restaurant_1.photo.attach(io: file_1, filename: 'restaurant-photo.jpeg')
restaurant_2.photo.attach(io: file_2, filename: '32348786.jpeg')
restaurant_3.photo.attach(io: file_3, filename: '48475190.jpeg')
restaurant_4.photo.attach(io: file_4, filename: '41743859.jpeg')
restaurant_5.photo.attach(io: file_5, filename: '41743155.jpeg')
restaurant_6.photo.attach(io: file_6, filename: '25161707.jpeg')
restaurant_7.photo.attach(io: file_7, filename: '24862703.jpeg')
restaurant_8.photo.attach(io: file_8, filename: '31853822.jpeg')
restaurant_9.photo.attach(io: file_9, filename: '32413056.jpeg')
restaurant_10.photo.attach(io: file_10, filename: '31302139.jpeg')
restaurant_11.photo.attach(io: file_11, filename: '25544914.jpeg')
restaurant_12.photo.attach(io: file_12, filename: '47117581.png')
restaurant_13.photo.attach(io: file_13, filename: '50983838.jpeg')
restaurant_14.photo.attach(io: file_14, filename: '29886999.jpeg')
restaurant_15.photo.attach(io: file_15, filename: '27185451.jpeg')