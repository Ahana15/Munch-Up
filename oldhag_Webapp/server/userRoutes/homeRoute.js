const express = require("express");
const router = express.Router();
// const database = require("../database");

//Home Page Set Up
router.get("/", (req, res) => {
  console.log("Home Page Hello");

  let templateVars = {
    user_id: req.session.user_id,
    user_email: req.session.email,
    user_name: req.session.user_name
  };
  // console.log(req.session);

  res.render('homePage', templateVars);
});

module.exports = router;
