const express = require("express");
const router = express.Router();

//Home Page Set Up
router.get("/", (req, res) => {
  console.log("Login Page");
  res.send("Login Page");
});

module.exports = router;
