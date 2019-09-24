const express = require("express");
const router = express.Router();
const database = require("../database");

//Restaurant - Soy-Ramentic Page Set Up
router.get("/", (req, res) => {
  database
    .getMenuItems(1, 1)
    .then(items => {
      let templateVars = {
        items,
        user_id: req.session.user_id,
        user_email: req.session.email,
        user_name: req.session.user_name
      };
      res.render("restaurant1", templateVars);
    })
    .catch(err => console.log(err));
});

module.exports = router;
