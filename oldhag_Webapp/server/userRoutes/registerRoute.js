const express = require("express");
const router = express.Router();

//Home Page Set Up
router.get("/", (req, res) => {
  res.render('registration');
});

module.exports = router;
