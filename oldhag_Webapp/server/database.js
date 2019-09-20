const db = require("./db/index.js");
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

const login = function(email, password) {
  return database.getUserWithEmail(email).then(user => {
    if (bcrypt.compareSync(password, user.password)) {
      return user;
    }
    return null;
  });
};
exports.login = login;
