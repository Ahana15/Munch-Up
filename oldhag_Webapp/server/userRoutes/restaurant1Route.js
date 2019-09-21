const express = require("express");
const router = express.Router();
const db = require("../db/index");

const getMenuItems = function(restaurant_id, menu_id) {
  return db
    .query(
      `
 SELECT items.name, items.description, items.price
 FROM items
 JOIN menus ON items.menu_id = menus.id
 JOIN restaurants ON restaurants.id = menus.restaurant_id
 WHERE restaurants.id = $1 AND menus.id = $2;`,
      [restaurant_id, menu_id]
    )
    .then(res => {
      console.log(res.rows);
      return res.rows;
    })
    .catch(err => console.log(err));
};

exports.getMenuItems = getMenuItems;
//Home Page Set Up
router.get("/", (req, res) => {
  const items = getMenuItems(1, 1)
    .then(items => {
      let holder = { items };
      console.log(holder);
      res.render("restaurant1", holder);
    })
    .catch(err => console.log(err));
});

module.exports = router;
