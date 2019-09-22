const express = require("express");
const router = express.Router();
const helper = require('../database');

//User Page Set Up
router.get("/", (req, res) => {
  // console.log("User Order Status Page Hello");
  // console.log(req);
  res.render('userOrderStatus');
});

router.post("/", async (req, res) => {
  // console.log(req.body);
  // console.log(req);
  // let name = { food: req.body };
  let templateVars = { data: req.body };
  console.log(req.body);
  
  res.render('userOrderStatus', templateVars);


  // helper.addUsersOrderStatuses(req.body[0]);
  // res.send('User Order Status Page Hello');
});

module.exports = router;
