const express = require("express");
const router = express.Router();
const database = require('../database');



//Home Page Set Up
router.get("/", (req, res) => {
  const items = database.getMenuItems(1, 1)
    .then(items => {
      let holder = { items };
      res.render("restaurant1", holder);
    })
    .catch(err => console.log(err));
});

module.exports = router;
