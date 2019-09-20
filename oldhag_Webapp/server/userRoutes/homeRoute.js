const express = require("express");
const router = express.Router();

//Home Page Set Up
router.get("/", (req, res) => {
  console.log("Home Page Hello");
  res.send("Home Page Hello");
});

module.exports = router;
