const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  let templateVars = {
    user_id: req.session.user_id,
    user_email: req.session.email,
    user_name: req.session.user_name
  };
  res.render("restaurantList", templateVars);
});

router.post("/", (req, res) => {
  let string = req.body.search;
  if (string.includes("soy") || string.includes("ramen")) {
    res.redirect("/restaurantlist/#soy");
  } else if (string.includes("pizza")) {
    res.redirect("/restaurantlist/#pizza");
  } else if (string.includes("cod")) {
    res.redirect("/restaurantlist/#cod");
  } else if (string.includes("pasta")) {
    res.redirect("/restaurantlist/#pasta");
  } else {
    res.redirect("/restaurantlist");
  }
});

router;
module.exports = router;
