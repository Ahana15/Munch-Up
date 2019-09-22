const express = require("express");
const router = express.Router();

//Home Page Set Up
router.get("/", (req, res) => {
  req.session = null;
  res.redirect("/");
});

module.exports = router;
