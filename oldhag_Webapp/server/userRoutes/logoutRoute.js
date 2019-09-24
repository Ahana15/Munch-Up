const express = require("express");
const router = express.Router();

//Logout Page Set Up
router.get("/", (req, res) => {
  req.session = null;
  res.redirect("/");
});

module.exports = router;
