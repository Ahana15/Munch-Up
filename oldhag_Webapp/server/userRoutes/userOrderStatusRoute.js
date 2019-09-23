const express = require("express");
const router = express.Router();
const database = require("../database");

//User Page Set Up
router.get("/", (req, res) => {
  database
    .getOrders(req.session.user_id)
    .then(res => {
      return (templateVars = { data: req.body, orders: res });
    })
    .then(templateVars => {
      templateVars.user_id = req.session.user_id;
      templateVars.user_email = req.session.email;
      templateVars.user_name = req.session.user_name;
      res.render("userOrderStatus", templateVars);
    });
});
module.exports = router;
