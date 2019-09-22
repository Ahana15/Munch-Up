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
  // console.log("hello, testing");
  return getUserWithEmail(email)
    .then(user => {
      // console.log(user);
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
    order_id, user_id , status )
    VALUES (
    $1, $2, $3)
    RETURNING *;`,
      [order.order_id, order.user_id, order.status]
    )
    .then(res => res.rows);
};
exports.addUsersOrderStatuses = addUsersOrderStatuses;

// const addRestaurantOrderStatuses = function(order) {
//   return db
//     .query(
//       `
//     INSERT INTO restaurant_order_statuses (
//     order_id, user_id , restaurant_id )
//     VALUES (
//     $1, $2, $3)
//     RETURNING *;`,
//       [order.order_id, order.user_id, order.restaurant_id]
//     )
//     .then(res => res.rows);
// };
// exports.addRestaurantOrderStatuses = addRestaurantOrderStatuses;

// const displayItemsInOrder = function(orderId) {
//   db.query(
//     `SELECT orders.id, items.name, items.price, orders.quantity
//     FROM items
//     JOIN orders ON items.id = orders.item_id
//     WHERE order_id = $1;`,
//     [orderId]
//   ).then(res => res.rows);
// };
// exports.displayItemsInOrder = displayItemsInOrder;
