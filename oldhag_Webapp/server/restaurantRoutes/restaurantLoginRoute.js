const express = require("express");
const router = express.Router();

//Home Page Set Up
router.get("/", (req, res) => {
  console.log("Restaurant Login Hello");
  res.render("restaurantLogin");
});

module.exports = router;
