const express = require("express");
const router = express.Router();

//Home Page Set Up
router.get("/", (req, res) => {
  console.log("Register Page Hello");
  res.send("Register Page Hello");
});

module.exports = router;
