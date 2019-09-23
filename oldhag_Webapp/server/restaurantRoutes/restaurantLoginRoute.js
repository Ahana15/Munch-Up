const express = require("express");
const router = express.Router();

//Home Page Set Up
router.get("/", (req, res) => {
  console.log("Restaurant Login Hello");
  let templateVars = {
    user_id: req.session.user_id,
    user_email: req.session.email,
    user_name: req.session.user_name
  };
  res.render("restaurantLogin", templateVars);
});

module.exports = router;
