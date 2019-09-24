const db = require("./db/index.js");
const bcrypt = require("bcrypt");

const addUser = function(user) {
  return db
    .query(
      `
    INSERT INTO users (
    name, email, password, phone_number)
    VALUES (
    $1, $2, $3, $4)
    RETURNING *;`,
      [user.name, user.email, user.password, user.phone_number]
    )
    .then(res => res.rows[0]);
};
exports.addUser = addUser;

//Get user info with email
const getUserWithEmail = email => {
  return db
    .query(
      `
  SELECT * FROM users
  WHERE email = $1;
  `,
      [email]
    )
    .then(res => res.rows[0]);
};
exports.getUserWithEmail = getUserWithEmail;

//login
const login = function(email, password) {
  return getUserWithEmail(email)
    .then(user => {
      if (bcrypt.compareSync(password, user.password)) {
        return user;
      }
      return null;
    })
    .catch(err => console.log(err));
};
exports.login = login;

const addUsersOrderStatuses = function(order) {
  return db
    .query(
      `
    INSERT INTO users_order_statuses (
    order_id, user_order, user_id)
    VALUES (
    $1, $2, $3)
    RETURNING *;`,
      [order.id, order.user_order, order.user_id]
    )
    .then(res => {
      res.rows;
    });
};
exports.addUsersOrderStatuses = addUsersOrderStatuses;

const getMenuItems = function(restaurant_id, menu_id) {
  return db
    .query(
      `
      SELECT items.id, items.name, items.description, items.price, restaurants.id as restaurant_id
      FROM items
      JOIN menus ON items.menu_id = menus.id
      JOIN restaurants ON restaurants.id = menus.restaurant_id
      WHERE restaurants.id = $1 AND menus.id = $2;`,
      [restaurant_id, menu_id]
    )
    .then(res => {
      return res.rows;
    })
    .catch(err => console.log(err));
};

exports.getMenuItems = getMenuItems;

const addOrder = function(id, quantity, user_id, restaurant_id, uniqueKey) {
  let currentTime = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York"
  });
  currentTime = currentTime
    .split(" ")
    .slice(0, 4)
    .join(" ");

  return db
    .query(
      `INSERT INTO orders (item_id, quantity, user_id, restaurant_id, user_order, created_at)
        VALUES ($1,$2,$3,$4,$5,$6) RETURNING *;`,
      [id, quantity, user_id, restaurant_id, uniqueKey, currentTime]
    )
    .then(res => {
      addUsersOrderStatuses(res.rows[0]);
      return res.rows;
    });
};
exports.addOrder = addOrder;

const getOrders = function(id) {
  return db
    .query(
      `SELECT orders.user_order, items.name as item_name, restaurants.name as restaurant_name, orders.created_at, users_order_statuses.status, orders.quantity, items.price
      FROM orders 
        JOIN users_order_statuses ON (orders.user_order = users_order_statuses.user_order)
        JOIN restaurants ON (orders.restaurant_id = restaurants.id)
        JOIN items ON (items.id = orders.item_id)
      WHERE orders.user_id = $1
      GROUP BY orders.user_order, items.name, restaurants.name, orders.created_at, users_order_statuses.status, orders.quantity, items.price
      ORDER BY orders.created_at DESC;
      
      `,
      [id]
    )
    .then(res => res.rows);
};
exports.getOrders = getOrders;

const getRestaurantOrders = function(id) {
  return db
    .query(
      `SELECT orders.user_order, items.name as item_name, users.name as user_name, orders.created_at, orders.quantity, users_order_statuses.status
      FROM orders 
        JOIN users_order_statuses ON (orders.user_order = users_order_statuses.user_order)
        JOIN users ON (orders.user_id = users.id)
        JOIN items ON (items.id = orders.item_id)
      WHERE orders.restaurant_id = $1
      GROUP BY orders.user_order, items.name, users.name, orders.created_at, orders.quantity,users_order_statuses.status
      ORDER BY orders.created_at DESC;
      
      `,
      [id]
    )
    .then(res => res.rows);
};
exports.getRestaurantOrders = getRestaurantOrders;

const generateRandomString = () => {
  let randomString = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 6; i++) {
    randomString += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return randomString;
};
exports.generateRandomString = generateRandomString;

//update order status when restaurant clicks
const updateOrderStatus = function(orderId, message) {
  return db
    .query(
      `UPDATE users_order_statuses
        SET status = $2 WHERE user_order = $1;
  `,
      [orderId, message]
    )
    .then(res => res.rows);
};

exports.updateOrderStatus = updateOrderStatus;

//Group orders based on unique key
const groupOrders = function(orders) {
  let items = [];
  let result = [];
  let i = 0;

  if (orders.length === 0) {
    return result;
  }

  let key = orders[0].user_order;
  for (let order of orders) {
    if (key === order.user_order) {
      items.push(order);
    } else {
      result.push(items);
      items = [];
      items.push(order);
      key = orders[i].user_order;
    }
    i++;
  }
  if (items.length !== 0) {
    result.push(items);
  }
  return result;
};
exports.groupOrders = groupOrders;
