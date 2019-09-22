const express = require("express");
const router = express.Router();
const database = require('../database');

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
  console.log(templateVars);
  for (let item of req.body['item-quantity']){
    if (item > 0){
      let i = req.body['item-quantity'].indexOf(item);
      database.addOrder(parseInt(req.body['item-id'][i]), parseInt(item), parseInt(req.session.user_id));
      console.log("this is the test: ", typeof(parseInt(req.body['item-id'][i])), parseInt(item), parseInt(req.session.user_id));
    }
  }
  
  res.render('userOrderStatus', templateVars);


  // helper.addUsersOrderStatuses(req.body[0]);
  // res.send('User Order Status Page Hello');
});

module.exports = router;
