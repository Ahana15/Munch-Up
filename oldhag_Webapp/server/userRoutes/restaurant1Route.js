const express = require("express");
const router = express.Router();
const database = require('../database');



//Home Page Set Up
router.get("/", (req, res) => {
  database.getMenuItems(1, 1)
    .then(items => {
      res.render("restaurant1", { items });
    })
    .catch(err => console.log(err));
});

module.exports = router;
