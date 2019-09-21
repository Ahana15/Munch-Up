
INSERT INTO users
   (
   name, email, password, phone_number, is_owner)
VALUES
   (
      'Devin Sanders', 'tristanjacobs@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', '+14164347869', false);
INSERT INTO users
   (
   name, email, password)
VALUES
   (
      'Iva Harrison', 'allisonjackson@mail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', '+14164347869', false);



INSERT INTO restaurants
   (name, cuisine, unit_number, street, city, province, post_code, country)
VALUES
   ('Ryus Noodle Bar', 'japanese', 1, '669 Queen St W', 'Toronto', 'Ontario', 'M6J 1E6', 'Canada');

INSERT INTO menus
   (name, restaurant_id)
VALUES
   ('lunch', 1);
INSERT INTO menus
   (name, restaurant_id)
VALUES
   ('winter', 1);

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
  ('Nostalgic Shio','On Top: pork slice, chicken slice, bamboo shoot, arugula, white fungus, sesame Broth: chicken, beef','URL',1250, 1, 1);
INSERT INTO items
  (name, description, thumbnail_url, price, menu_id, restaurant_id )
VALUES
  ('Nostalgic Shoyu','On Top: pork slice, chicken slice, bamboo shoot, arugula, white fungus, sesame Broth: chicken, beef','URL',1250, 1, 1);
INSERT INTO items
  (name, description, thumbnail_url, price, menu_id, restaurant_id )
VALUES
  ('Miso','On Top: pork slice, chicken slice, bamboo shoot, arugula, white fungus, sesame Broth: chicken, beef','URL',1250, 1, 1);
INSERT INTO items
  (name, description, thumbnail_url, price, menu_id, restaurant_id )
VALUES
  ('Shoyu','On Top: pork slice, chicken slice, bamboo shoot, arugula, white fungus, sesame Broth: chicken, beef','URL',1250, 1, 1);
INSERT INTO items
  (name, description, thumbnail_url, price, menu_id, restaurant_id )
VALUES
  ('Shio','On Top: pork slice, chicken slice, bamboo shoot, arugula, white fungus, sesame Broth: chicken, beef','URL',1250, 1, 1);








