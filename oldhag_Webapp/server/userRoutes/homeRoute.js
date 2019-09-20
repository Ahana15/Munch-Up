const express = require("express");
const router = express.Router();

//Home Page Set Up
router.get("/", (req, res) => {
  console.log("Home Page Hello");
  res.render('homePage');
});

module.exports = router;
