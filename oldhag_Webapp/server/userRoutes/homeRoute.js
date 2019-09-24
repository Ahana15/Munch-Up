const express = require("express");
const router = express.Router();
const database = require("../database");

//Home Page Set Up
router.get("/", (req, res) => {
  if (req.session.user_id) {
    database.getUserWithEmail(req.session.email).then(user => {
      let templateVars = {
        user_id: req.session.user_id,
        user_email: req.session.email,
        user_name: req.session.user_name,
        user_isowner: user.is_owner
      };
      res.render("homePage", templateVars);
    });
  } else {
    let templateVars = {
      user_id: req.session.user_id,
      user_email: req.session.email,
      user_name: req.session.user_name
    };
    res.render("homePage", templateVars);
  }
});

module.exports = router;
