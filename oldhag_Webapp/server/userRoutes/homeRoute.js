const express = require("express");
const router = express.Router();

//Home Page Set Up
router.get("/", (req, res) => {
  let templateVars = {
    user_id: req.session.user_id,
    user_email: req.session.email,
    user_name: req.session.user_name
  };

  res.render("homePage", templateVars);
});

module.exports = router;
