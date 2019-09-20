const express = require("express");
const router = express.Router();

//Home Page Set Up
router.get("/", (req, res) => {
  console.log("Ordering Page");
  res.send("Ordering Page");
});

module.exports = router;
