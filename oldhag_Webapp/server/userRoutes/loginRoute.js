const express = require("express");
const router = express.Router();
const database = require("../database");

//Login Page Set Up
router.get("/", (req, res) => {
  if (req.session.user_id) {
    res.redirect("/");
  } else {
    let templateVars = {
      user_id: req.session.user_id,
      user_email: req.session.email,
      user_name: req.session.user_name,
      user_isowner: null
    };
    res.render("login", templateVars);

  }

});

router.post("/", (req, res) => {
  database
    .login(req.body.email, req.body.password)
    .then(user => {
      if (!user) {
        res.send("User account doesn't exist. Please register first. Thank you. :)");
        return;
      }
      req.session.user_id = user.id;
      req.session.user_name = user.name;
      req.session.email = user.email;
      if (user.is_owner) {
        res.redirect("/restaurantpage");
      } else {
        res.redirect("/");
      }
    })
    .catch(e => res.send(e));
});

module.exports = router;
