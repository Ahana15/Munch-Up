const express = require("express");
const router = express.Router();
const database = require("../database");

//User Page Set Up
router.get("/", (req, res) => {
  // console.log("User Order Status Page Hello");
  // console.log(req);
  res.render("userOrderStatus");
});

router.post("/", async (req, res) => {
  // console.log(req.body);
  // console.log(req);
  // let name = { food: req.body };
  // console.log(templateVars);

  // console.log(req.body["restaurant-id"]);
  // console.log(req.body["item-id"]);
  const userOrder = database.generateRandomString();
  console.log(userOrder);
  for (let i = 0; i < req.body["item-quantity"].length; ++i) {
    if (req.body["item-quantity"][i] > 0) {
      database.addOrder(
        Number(req.body["item-id"][i]),
        Number(req.body["item-quantity"][i]),
        Number(req.session.user_id),
        Number(req.body["restaurant-id"][i]),
        userOrder
      );
    }
  }

  database
    .getOrders(req.session.user_id)
    .then(res => {
      console.log(res)
      return (templateVars = { data: req.body, orders: res});
    })
    .then(templateVars => {
     templateVars.user_id = req.session.user_id;
        templateVars.user_email = req.session.email;
        templateVars.user_name =  req.session.user_name;
      console.log(templateVars);
      res.render("userOrderStatus", templateVars);
    });

  // helper.addUsersOrderStatuses(req.body[0]);
  // res.send('User Order Status Page Hello');
});

module.exports = router;
