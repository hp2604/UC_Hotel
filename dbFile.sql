create database uchotel;
use uchotel;

INSERT INTO dish (avail, category, description, dish_name, price, time) VALUES
('yes', 'Accompaniment', 'Fried or roasted papad', 'Papad', 40, '3 '),
('yes', 'Accompaniment', 'Spiced papad served fried or roasted', 'Masala Papad', 60, '4 '),
('yes', 'Accompaniment', 'Fresh homemade curd', 'Plain Curd', 70, '2 '),
('yes', 'Accompaniment', 'Mix Veg, Pineapple, Fruit, Boondi, or Cucumber raita', 'Choice of Raita', 120, '5 ');

INSERT INTO dish (avail, category, description, dish_name, price, time) VALUES
('yes', 'Dessert', 'Traditional rabdi served with gulab jamun', 'Rabdi with Gulab Jamun', 140, 8),
('yes', 'Dessert', 'Rabdi enriched with dry fruits', 'Dry Fruit Rabdi', 120, 6),
('yes', 'Dessert', 'Saffron-flavored rasmalai', 'Kesariya Rasmalai', 120, 5),
('yes', 'Dessert', 'Traditional kulfi topped with faluda', 'Kulfi Faluda', 120, 7),
('yes', 'Dessert', 'Chhena dessert flavored with rose', 'Chhena Rose Malai', 120, 5),
('yes', 'Dessert', 'Bengali sweet made from fresh chhena', 'Kachagulla', 120, 4),
('yes', 'Dessert', 'Thick sweetened yogurt with flavors', 'Flavoured Shreekhand', 120, 4),
('yes', 'Dessert', 'Hazelnut or Dark Chocolate pastry options', 'Pastry', 160, 6),
('yes', 'Dessert', 'Blueberry or Biscoff flavored cheesecake', 'Cheesecake', 160, 7),
('yes', 'Dessert', 'Traditional Indian sweets (ask for options)', 'Misthan 1949', 140, 5),
('yes', 'Dessert', 'Vanilla, Strawberry, Chocolate, or Butterscotch', 'Ice Cream Scoop', 120, 3),
('yes', 'Dessert', 'Sweet mango pulp (seasonal)', 'Aamras', 120, 4),
('yes', 'Dessert', 'Warm brownie served on sizzler plate with ice cream', 'Sizzling Brownie', 150, 9);

INSERT INTO dish (avail, category, description, dish_name, price, time) VALUES
('yes', 'Refreshment', 'Traditional saffron-flavored milk with dry fruits', 'Saffron Dry Fruit Thandai', 130, 6),
('yes', 'Refreshment', 'Spiced buttermilk with Indian herbs', 'Masala Chhaas', 70, 3),
('yes', 'Refreshment', 'Sweetened yogurt-based traditional drink', 'Sweet Lassi', 90, 4),
('yes', 'Refreshment', 'Refreshing watermelon-based cooler', 'Watermelon Cooler', 150, 5),
('yes', 'Refreshment', 'Choice of Mango Mojito or Kiwi Cucumber Mojito', 'Virgin Mojito', 150, 6),
('yes', 'Refreshment', 'Electric blue tangy mocktail', 'Blue Lagoon', 150, 5),
('yes', 'Refreshment', 'Soda with fresh lime juice (sweet or salty)', 'Fresh Lime Soda', 130, 4),
('yes', 'Refreshment', 'Thick shake made with Oreo biscuits', 'Oreo Shake', 180, 6),
('yes', 'Refreshment', 'Creamy shake with brownie and chocolate', 'Chocolate Brownie Shake', 180, 6),
('yes', 'Refreshment', 'KitKat blended into a rich milkshake', 'Kitkat Shake', 180, 6),
('yes', 'Refreshment', 'Mixed fruit-flavored mocktail', 'Fruit Punch', 180, 5),
('yes', 'Refreshment', 'Unique shake with popcorn flavor', 'Popcorn Delight', 180, 7),
('yes', 'Refreshment', 'Available in Vanilla, Strawberry, Chocolate', 'Flavoured Milkshake', 160, 5),
('yes', 'Refreshment', 'Hot coffee with milk foam or steamed milk', 'Cappuccino/Café Latte', 90, 4),
('yes', 'Refreshment', 'Available in Ginger or Masala flavors', 'Tea', 55, 3),
('yes', 'Refreshment', 'Sprite, Coca Cola, or Diet Coke', 'Cold Drinks', 65, 2),
('yes', 'Refreshment', 'Carbonated soft drink flavored with ginger', 'Ginger Ale', 75, 3);

INSERT INTO dish (avail, category, description, dish_name, price, time) VALUES
('yes', 'Salad', 'Sliced onions with lemon and spices', 'Onion Salad', 80, 3),
('yes', 'Salad', 'Fresh leafy greens with seasonal vegetables', 'Green Salad', 120, 4),
('yes', 'Salad', 'Spicy peanut mix with onion and tomato', 'Peanut Chaat', 120, 5),
('yes', 'Salad', 'Creamy salad with vegetables and mayonnaise', 'Russian Salad', 180, 6),
('yes', 'Salad', 'Romaine lettuce with Caesar dressing and croutons', 'Caesar Salad', 220, 6),
('yes', 'Salad', 'Feta cheese, olives, cucumber, and tomato', 'Greek Salad', 220, 5),
('yes', 'Salad', 'Healthy quinoa with assorted veggies and herbs', 'Quinoa Salad', 220, 6),
('yes', 'Salad', 'Chilled watermelon with feta cheese and mint', 'Watermelon Feta Salad', 220, 4);

INSERT INTO dish (avail, category, description, dish_name, price, time) VALUES
('yes', 'Soup', 'Choice of Manchow, Hot n Sour, Lemon Coriander, Veg Clear, or Sweet Corn', 'Chinese Soup of Your Choice', 150, 6),
('yes', 'Soup', 'Tomato and coriander flavored Indian soup', 'Tamatar Dhaniye Ka Shorba', 150, 5),
('yes', 'Soup', 'Roasted chili and corn Indian-style soup', 'Bhuna Mirch Makai Ka Shorba', 150, 5),
('yes', 'Soup', 'Smooth broccoli soup blended with almonds', 'Cream of Broccoli & Almond', 180, 7),
('yes', 'Soup', 'Burmese-style coconut noodle soup with vegetables', 'Burmese Khao Suey', 180, 8);

INSERT INTO dish (avail, category, description, dish_name, price, time) VALUES
('yes', 'Starter', 'An earthy spin on a beloved classic where paneer cubes are marinated in a vibrant blend of spices, fresh herbs and char grilled to perfection.', 'Pahadi Paneer Tikka', 290, 8),
('yes', 'Starter', 'Subtle peppery notes of ajwain compliments the creamy texture of paneer resulting in this delightful preparation.', 'Ajwaini Paneer Tikka', 290, 8),
('yes', 'Starter', 'Mushrooms roasted in the tandoor with bold smoky notes, ideal for mushroom lovers.', 'Kumbh Tandoori', 280, 7),
('yes', 'Starter', 'Roasted broccoli with Bengali-style spicy mustard sauce, retaining natural crunch and flavor.', 'Kasundi Broccoli', 320, 6),
('yes', 'Starter', 'Broccoli marinated in yogurt, cream, and herbs, roasted to perfection.', 'Malai Broccoli', 320, 6),
('yes', 'Starter', 'Green garlic and creamy yogurt kebab fusion for bold and flavorful bites.', 'Hare Lehsun ke Dahi ke Kabab', 250, 6),
('yes', 'Starter', 'Crispy fried kebabs stuffed with molten cheese, served with mint sauce.', 'Chuparaustam', 260, 5),
('yes', 'Starter', 'Shallow fried bean and cottage cheese kebabs in desi cow ghee with aromatic spices.', 'Rajma Galouti Kebab', 260, 6),
('yes', 'Starter', 'Shallow fried mushroom and cheese kebabs in desi cow ghee with signature spices.', 'Mushroom Galouti Kebab', 260, 6),
('yes', 'Starter', 'Assorted platter: Ajwaini & Pahadi paneer tikka, Malai broccoli, Tandoori mushroom, Chuparaustam, and Dahi kebab.', 'Tandoori Veg Platter', 410, 10),
('yes', 'Starter', 'Deep-fried crispy water chestnuts in sweet and tangy garlic sauce.', 'Pepper Garlic Waterchestnuts', 320, 5),
('yes', 'Starter', 'Crispy fried paneer tossed in Chinese garlic, onion, bell pepper and chili sauces.', 'Chilli Paneer', 280, 5),
('yes', 'Starter', 'Fried mixed vegetable balls in sweet, sour, and hot manchurian sauce.', 'Veg Manchurian', 260, 6);

INSERT INTO dish (avail, category, description, dish_name, price, time) VALUES
('yes', 'Starter', 'Crispy fried stuffed with cheese, bell peppers, mushroom and mixed spices', 'Chilli Mushroom in Black Pepper Sauce', 280, 6),
('yes', 'Starter', 'Stuffed paneer rolls topped with sweet and tangy sauce', 'Mexican Rolls', 260, 5),
('yes', 'Starter', 'Golden fried cheese balls covered with crumb and sesame', 'Sesame Cheese Balls', 260, 5),
('yes', 'Starter', 'Crispy fried baby corn sautéed with bell peppers, onion and garlic in sweet & tangy Chinese sauce', 'Crispy Chilli Baby Corn', 260, 6),
('yes', 'Starter', 'Crispy fried rolls stuffed with cheese, bell peppers and mixed spices', 'Cheese Cigar Rolls', 260, 5),
('yes', 'Starter', 'Exotic vegetables tossed in butter with garlic, salt, and pepper', 'Vegetable Saute', 320, 6),
('yes', 'Starter', 'Crispy fried potato balls prepared in sweet and tangy garlic sauce', 'Honey Chilli Potato', 260, 5),
('yes', 'Starter', 'Crispy chilli potato prepared in hoisin sauce', 'Hoisin Chilli Potato', 260, 5),
('yes', 'Starter', 'Vegetable stock with cottage cheese, vegetables, noodles, and dumplings', 'Vegetable Thukpa', 260, 7),
('yes', 'Starter', 'Hakka noodles tossed with vegetables in Chinese sauces', 'Hakka Noodles', 280, 6),
('yes', 'Starter', 'Spicy noodles made with Schezwan sauce or chutney', 'Veg Schezwan Hakka Noodles', 320, 7),
('yes', 'Starter', 'Basmati rice tossed with veggies in Chinese sauces', 'Veg Fried Rice', 260, 6),
('yes', 'Starter', 'Golden crisp potato fries', 'French Fries', 240, 4),
('yes', 'Starter', 'Crispy corn chips overloaded with beans salad and cheese, served with salsa sauce', 'Nachos Overloaded with Salsa Sauce', 240, 5),
('yes', 'Starter', 'Stuffed with water chestnut, spinach and cheese or vegetable dimsums', 'Dimsums', 260, 6),
('yes', 'Starter', 'Fried corn kernels sautéed in butter, green chili, garlic and onion with a dash of salt and pepper', 'Crispy Corn Chilli Pepper', 260, 5);

INSERT INTO dish (avail, category, description, dish_name, price, time) VALUES
('Yes', 'MultiCuisine', 'Margherita / Veg Delight / Paneer Tikka', 'CHEF’S SPECIAL HAND TOSSED PIZZA', 350, 10),
('Yes', 'MultiCuisine', 'Penne/ Fusilli in Red/White/Pink/Pesto Sauce', 'CHOICE OF PASTA', 290, 11),
('Yes', 'MultiCuisine', 'Thin Sheets Of Pasta Layered With A Medley Of Sautéed Vegetables, Rich Tomato Sauce, Creamy Béchamel, And A Generous Helping Of Mozzarella And Parmesan Cheeses.', 'BAKED LASAGNA', 360, 12),
('Yes', 'MultiCuisine', 'Vegetables, Often Including Carrots And Peas, Layered And Smothered In A Rich Cheese-infused Sauce & Baked To Perfection.', 'BAKED VEGETABLE', 330, 13),
('Yes', 'MultiCuisine', 'Triangular Pasta Filled With A Mixture Of Spinach And Herbs, Parmesan Cheese, Served With Pink Tangy To Sweet Sauce.', 'SPINACH RAVIOLI', 330, 14),
('Yes', 'MultiCuisine', 'Creamy Arborio Rice With Assorted Cheeses In Mushroom Flavour.', 'CREAMY MUSHROOM RISOTO', 360, 15),
('Yes', 'MultiCuisine', 'Creamy Arborio Rice Infused With Rich Saffron & Assorted Cheeses.', 'SAFFRON RISOTO', 360, 16),
('Yes', 'MultiCuisine', 'Coconut Milk Based Thai Curry With Assorted Vegetables And Jasmine Rice.', 'THAI CURRY WITH JASMINE RICE', 290, 17),
('Yes', 'MultiCuisine', '3 Different Flavored Hummus Served With Falafel, Pita Bread, Salad & Feta Cheese.', 'MEZZE PLATTER', 330, 18),
('Yes', 'MultiCuisine', 'Crispy Fried Ball Prepared With Risotto, Stuffed With Vegetables And Parmesan Cheese Garnished With Nachos.', 'ARANCINI BALLS', 290, 19);

INSERT INTO dish (avail, category, description, dish_name, price, time) VALUES
('Yes', 'MainCourse', 'Rich And Creamy Vegetarian Dish With Fresh Cottage Cheese And Fragrant Spices Prepared in Yellow Gravy', 'SHAHI PANEER', 320, 20),
('Yes', 'MainCourse', 'A North Indian Curry Where Grated Paneer And Paneer Cubes Are Simmered In A Rich And Creamy Red Gravy Made Using Onions, Tomatoes.', 'PANEER LABABADAR', 320, 21),
('Yes', 'MainCourse', 'Succulent Cubes Of Paneer Bathed In Luscious Gravy Featuring Caramelized Onions And Medium Spicy Red Gravy.', 'PANEER KHATTA PYAAZ', 340, 22),
('Yes', 'MainCourse', 'A Tangy And Spicy Paneer Dish With Onions, Tomatoes And Capsicum In Medium Spicy Red Gravy.', 'PANEER KADHAI', 320, 23),
('Yes', 'MainCourse', 'Paneer Cubes Bathed In Creamy Black Pepper Infused Gravy. A Sweet White Gravy Dish With Bold Flavor.', 'PANEER KALIMIRCH', 320, 24),
('Yes', 'MainCourse', 'Spices Like Black Cardamom, Cloves, Cinnamon, Black Peppercorns, Javitri, And Red Chillies Make This Spicy Red Gravy Paneer Dish Pungent.', 'PANEER KHADA MASALA', 320, 25),
('Yes', 'MainCourse', 'Fiery Allure Of Paneer Served In Robust Spiced Tomato-Based Gravy. A Celebration Of Saffron With Less Spicy Brown Gravy.', 'Paneer Zafrani', 340, 26),
('Yes', 'MainCourse', 'Popular North Indian Dish With Double Onions. Mildly Spicy Brown Medium Gravy.', 'PANEER DO PYAJA', 320, 27),
('Yes', 'MainCourse', 'Paneer Coated In Creamy Tomato-Based Gravy With Swirl Of Cream And Coriander. Mildly Spiced Red Gravy.', 'PANEER MAKHANI', 320, 28);

INSERT INTO dish (avail, category, description, dish_name, price, time) VALUES
('Yes', 'MainCourse', 'Paneer Slices Stuffed With Green Chutney, Mashed Paneer And Nuts, Cooked In A Flavourful Onion-tomato Medium Spicy Red Gravy.', 'PANEER PASANDA', 340, 29),
('Yes', 'MainCourse', 'Traditional Punjabi Dish With Marinated And Grilled Cottage Cheese, Capsicum And Tomato In Medium Spicy Tomato Onion Red Gravy.', 'PANEER TIKKA MASALA', 320, 30),
('Yes', 'MainCourse', 'Vegetarian Dish With Scrambled Paneer, Onions, Tomatoes And Spices.', 'PANEER BHURJI', 320, 31),
('Yes', 'MainCourse', 'Popular Indian Dish With Paneer Cheese And Spinach Sauce.', 'PALAK PANEER', 320, 32),
('Yes', 'MainCourse', 'Mushrooms In A Fragrant Masala With Onions, Tomatoes, And Spices. Brown Gravy, Medium Spicy.', 'MASALA-E-KUMBH', 300, 33),
('Yes', 'MainCourse', 'Indian Gravy Dish Made From Mixed Vegetable Dumplings In Creamy Onion-Tomato Based Gravy.', 'VEG KOFTA Curry', 320, 34),
('Yes', 'MainCourse', 'Rich And Creamy Vegetarian Dish With Paneer And Condensed Milk Balls. Available In Red Gravy And White Gravy.', 'MALAI KOFTA', 320, 35),
('Yes', 'MainCourse', 'Assorted Lentils Cooked To Perfection In Red/White Gravy. A Nutritious, Flavorful Bowl.', 'NARGISI KOFTA', 340, 36),
('Yes', 'MainCourse', 'Delectable Curry With Soya Chaap Sticks Cooked In Spicy Red Gravy.', 'SOYA CHAAP MASALA', 310, 37),
('Yes', 'MainCourse', 'Vegetarian Twist To A Classic Dish. Soya Khurchan Red Gravy, Medium Spicy.', 'SOYA KHURCHAN', 310, 38);

