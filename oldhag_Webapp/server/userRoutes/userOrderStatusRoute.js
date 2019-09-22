const express = require("express");
const router = express.Router();
const helper = require('../database');

//User Page Set Up
router.get("/", (req, res) => {
  console.log("User Order Status Page Hello");
  res.render('userOrderStatus');
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    res.render('userOrderStatus');
  } catch (err) {
    console.log('inside catch')
  }
  // res.send('success')
  // helper.addUsersOrderStatuses(req.body[0]);


  // res.send('User Order Status Page Hello');
});

module.exports = router;
