

INSERT INTO users
   (
   name, email, password, phone_number, is_owner)
VALUES
   (
      'Soy Ramentic', 'restaurant@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', '+14164347869', true);
      INSERT INTO users
   (
   name, email, password, phone_number, is_owner)
VALUES
   (
      'Slice, Slice Baby', 'restaurant2@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', '+14164347869', true);
INSERT INTO users
   (
   name, email, password, phone_number, is_owner)
VALUES
   (
      'The Codfather', 'restaurant3@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', '+14164347869', true);
INSERT INTO users
   (
   name, email, password, phone_number, is_owner)
VALUES
   (
      'The Impasta', 'restaurant@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', '+14164347869', true);


INSERT INTO users
   (
   name, email, password, phone_number, is_owner)
VALUES
   (
      'Devin Sanders', 'tristanjacobs@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', '+14164347869', false);

INSERT INTO users
   (
   name, email, password, phone_number, is_owner)
VALUES
   (
      'Gary', '123@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', '+14164347869', false);


INSERT INTO restaurants
  (name, cuisine, unit_number, street, city, province, post_code, country, owner_id)
VALUES
  ('Soy Ramentic', 'japanese', 1, '669 Queen St W', 'Toronto', 'Ontario', 'M6J 1E6', 'Canada', 1);
INSERT INTO restaurants
  (name, cuisine, unit_number, street, city, province, post_code, country, owner_id)
VALUES
  ('Slice, Slice baby', 'gourmet pizzas', 1, '669 King St E', 'Toronto', 'Ontario', 'M6J 1E6', 'Canada', 2);
INSERT INTO restaurants
  (name, cuisine, unit_number, street, city, province, post_code, country, owner_id)
VALUES
  ('The Codfather', 'Seafood Joint', 1, '659 Dundas St E', 'Toronto', 'Ontario', 'M7K 1E6', 'Canada', 3);

INSERT INTO restaurants
  (name, cuisine, unit_number, street, city, province, post_code, country, owner_id)
VALUES
  ('The Impasta', 'Italian?', 1, '659 Queen St E', 'Toronto', 'Ontario', 'M3K 1N6', 'Canada', 4);

INSERT INTO menus
   (name, restaurant_id)
VALUES
   ('summer', 1);
INSERT INTO menus
   (name, restaurant_id)
VALUES
   ('winter', 1);
INSERT INTO menus
   (name, restaurant_id)
VALUES
   ('standard', 2);
INSERT INTO menus
   (name, restaurant_id)
VALUES
   ('standard', 3);
INSERT INTO menus
   (name, restaurant_id)
VALUES
   ('standard', 4);


INSERT INTO items
  (name, description, thumbnail_url, price, menu_id, restaurant_id )
VALUES
  ('Tan Tan Men','On Top: pork slice, chicken slice, bamboo shoot, arugula, white fungus, sesame Broth: chicken, beef','URL',1450, 2, 1);
INSERT INTO items
  (name, description, thumbnail_url, price, menu_id, restaurant_id )
VALUES
  ('Spicy Miso','On Top: pork slice, chicken slice, bamboo shoot, arugula, white fungus, sesame Broth: chicken, beef','URL',1250, 2, 1);
INSERT INTO items
  (name, description, thumbnail_url, price, menu_id, restaurant_id )
VALUES
  ('Shoyu','On Top: pork slice, chicken slice, bamboo shoot, arugula, white fungus, sesame Broth: chicken, beef','URL',1250, 2, 1);
INSERT INTO items
  (name, description, thumbnail_url, price, menu_id, restaurant_id )
VALUES
  ('Shio','On Top: pork slice, chicken slice, bamboo shoot, arugula, white fungus, sesame Broth: chicken, beef','URL',1250, 2, 1);
INSERT INTO items
  (name, description, thumbnail_url, price, menu_id, restaurant_id )
VALUES
  ('Tan Tan Men','Ground chicken, chive, sesame seeds, dried shrimp powder, house madde chilli oil','URL',1480, 1, 1);
INSERT INTO items
  (name, description, thumbnail_url, price, menu_id, restaurant_id )
VALUES
  ('Taiwanese Ramen','On Top: Spicy ground chicken, bean sprout, Red chilli, chives, sesame Broth: chicken, seafood, pepper','URL',1480, 1, 1);
INSERT INTO items
  (name, description, thumbnail_url, price, menu_id, restaurant_id )
VALUES
  ('Miso','On Top: pork slice, chicken slice, bean sprout, carrot, chive, nappa cabbage','URL',1480, 1, 1);
INSERT INTO items
  (name, description, thumbnail_url, price, menu_id, restaurant_id )
VALUES
  ('Shoyu','On Top: pork slice, chicken slice, arugula, white fungus, sesame Broth: chicken, soy sauce, beef','URL',1395, 1, 1);
INSERT INTO items
  (name, description, thumbnail_url, price, menu_id, restaurant_id )
VALUES
  ('Shio','On Top: pork slice, chicken slice, bamboo shoot, arugula, white fungus, sesame Broth: chicken, beef','URL',1395, 1, 1);

INSERT INTO items
  (name, description, thumbnail_url, price, menu_id, restaurant_id )
VALUES
  ('Pumpkin Tikka','Delicata squash, sage, coconut milk, tomato base','URL',1600, 3, 2);
INSERT INTO items
  (name, description, thumbnail_url, price, menu_id, restaurant_id )
VALUES
  ('Gorgonzola','Black garlic, honey, preserved lemons, walnuts, ricotta base','URL',1700, 3, 2);
INSERT INTO items
  (name, description, thumbnail_url, price, menu_id, restaurant_id )
VALUES
  ('Mushroom','Pickled mushroom, taleggio, crispy leeks, ricotta base','URL',1800, 3, 2);
INSERT INTO items
  (name, description, thumbnail_url, price, menu_id, restaurant_id )
VALUES
  ('Smoked Chorizo','Sweet & chilli peppers, manchego cheese, pancetta, tomato base','URL',2100, 3, 2);
INSERT INTO items
  (name, description, thumbnail_url, price, menu_id, restaurant_id )
VALUES
  ('Leg of Ham','Ricotta, Sicilian olives, basil oil, tomato base','URL',2100, 3, 2);


INSERT INTO items
  (name, description, thumbnail_url, price, menu_id, restaurant_id )
VALUES
  ('Fire Grilled Shrimp','Two skewers of shrimp bushd wiith buttery garlic glaze','URL',1600, 4, 3);
INSERT INTO items
  (name, description, thumbnail_url, price, menu_id, restaurant_id )
VALUES
  ('Shrimp Linguini Alfredo','Tender shrimp in garlic alfredo sauce, served over linguini','URL',2000, 4, 3);
INSERT INTO items
  (name, description, thumbnail_url, price, menu_id, restaurant_id )
VALUES
  ('Lobster Mac & Cheese','Cavatappi pasta tossed with lobster meat in cheesy lobster cream','URL',2100, 4, 3);
INSERT INTO items
  (name, description, thumbnail_url, price, menu_id, restaurant_id )
VALUES
  ('Icelandic Cod Fillet','Pan seared cod resting on a bed of house made pesto cream in linguine','URL',2500, 4, 3);
INSERT INTO items
  (name, description, thumbnail_url, price, menu_id, restaurant_id )
VALUES
  ('Catfish Fillet','Blackened in southern spices and finished with a spicy cajun creole sauce','URL',2500, 4, 3);
INSERT INTO items
  (name, description, thumbnail_url, price, menu_id, restaurant_id )
VALUES
  ('Halibut Fillet','Horseradish crusted halibut fillet, broiled to a golden brown','URL',2500, 4, 3);
INSERT INTO items
  (name, description, thumbnail_url, price, menu_id, restaurant_id )
VALUES
  ('Tilapia Fillet','Broiled and finished with a rich roasted red pepper cream sauce','URL',2500, 4, 3);



INSERT INTO items
  (name, description, thumbnail_url, price, menu_id, restaurant_id )
VALUES
  ('Gyoza','Japanese vegetable fried dumplings [5pc]','URL',599, 5, 4);

INSERT INTO items
  (name, description, thumbnail_url, price, menu_id, restaurant_id )
VALUES
  ('Spring Roll','Vegetable stuffed spring roll [5pc]','URL',699, 5, 4);

INSERT INTO items
  (name, description, thumbnail_url, price, menu_id, restaurant_id )
VALUES
  ('Beef Tataki','Panko breaded deep fried shrimp [6pc]Charred beef with home-made sauce','URL',999, 5, 4);
INSERT INTO items
  (name, description, thumbnail_url, price, menu_id, restaurant_id )
VALUES
  ('Mixed BBQ Set','BBQ Shrimp, hicken, beef, mushroom & vegetable on a skewer [3pc]','URL',999, 5, 4);
INSERT INTO items
  (name, description, thumbnail_url, price, menu_id, restaurant_id )
VALUES
  ('Las Vegas Roll [5pc]','Crispy fried roll with assorted sashimi, cream cheese, avocado and crabmeat','URL',850, 5, 4);
INSERT INTO items
  (name, description, thumbnail_url, price, menu_id, restaurant_id )
VALUES
  ('Calamari Tempura Roll [5pc]','Calamari tempura, avocado, cucumber, crabmeat','URL',750, 5, 4);
INSERT INTO items
  (name, description, thumbnail_url, price, menu_id, restaurant_id )
VALUES
  ('Tempura Shrimp Roll [6pc]','Tempura shrimp, avocado, mayonnaise, ying sh roe','URL',650, 5, 4);
INSERT INTO items
  (name, description, thumbnail_url, price, menu_id, restaurant_id )
VALUES
  ('Diamond Sashimi [21pc]','Tuna [3pc], Salmon [3pc], Snapper [3pc], Surf Clam [3pc], Octopus[3pc], Crabmeat [3pc], White Tuna [3pc]','URL',1999, 5, 4);