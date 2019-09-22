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
  let templateVars = { data: req.body };
  // console.log(templateVars);

  // console.log(req.body["restaurant-id"]);
  // console.log(req.body["item-id"]);

  for (let i = 0; i < req.body["item-quantity"].length; ++i) {
    if (req.body["item-quantity"][i] > 0) {
      database.addOrder(
        Number(req.body["item-id"][i]),
        Number(req.body["item-quantity"][i]),
        Number(req.session.user_id),
        Number(req.body["restaurant-id"][i])
      );
    }
  }

  res.render("userOrderStatus", templateVars);

  // helper.addUsersOrderStatuses(req.body[0]);
  // res.send('User Order Status Page Hello');
});

module.exports = router;
