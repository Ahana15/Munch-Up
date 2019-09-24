

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
  ('Leg of ham','Ricotta, Sicilian olives, basil oil, tomato base','URL',2100, 3, 2);
