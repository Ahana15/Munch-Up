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

const login = function(email, password) {
  console.log('hello, tesdting');
  return getUserWithEmail(email).then(user => {
    console.log(user);
    if (bcrypt.compareSync(password, user.password)) {
      return user;
    }
    return null;
  }).catch(err => console.log(err));
};
exports.login = login;
