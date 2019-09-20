const express = require("express");
const router = express.Router();

//Home Page Set Up
router.get("/", (req, res) => {
  res.render('login');
});

module.exports = router;
