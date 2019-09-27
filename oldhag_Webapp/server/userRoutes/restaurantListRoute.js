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
  if (string.includes("soy") || string.includes("ramen") || string.includes("ramentic")) {
    res.redirect("/restaurant1");
  } else if (string.includes("pizza")) {
    res.redirect("/restaurant2");
  } else if (string.includes("cod")) {
    res.redirect("/restaurant3");
  } else if (string.includes("pasta")) {
    res.redirect("/restaurant4");
  } else {
    res.redirect("/restaurantlist");
  }
});

router;
module.exports = router;
