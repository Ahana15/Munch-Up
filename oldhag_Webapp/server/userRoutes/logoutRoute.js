const express = require("express");
const router = express.Router();

//Home Page Set Up
router.get("/", (req, res) => {
  console.log("Logout Page");
  res.send("Logout Page");
});

module.exports = router;
