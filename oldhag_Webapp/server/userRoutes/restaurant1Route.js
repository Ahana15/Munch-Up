const express = require("express");
const router = express.Router();

//Home Page Set Up
router.get("/", (req, res) => {
  console.log("Restaurant Home Page Hello");
  res.render('restaurant1');
});

module.exports = router;
