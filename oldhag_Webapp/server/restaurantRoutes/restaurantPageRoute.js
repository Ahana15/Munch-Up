const express = require("express");
const router = express.Router();
const twilio = require("twilio");
const database = require("../database");

//restaurant Page Set Up
router.get("/", (req, res) => {
  database
    .getUserWithEmail(req.session.email)
    .then(user => {
      return (templateVars = {
        user_id: req.session.user_id,
        user_email: req.session.email,
        user_name: req.session.user_name,
        user_isowner: user.is_owner
      });
    })
    .then(templateVars => {
      database
        .getRestaurantOrders(templateVars.user_id)
        .then(result => {
          // console.log(result);
          let ordered = database.groupOrders(result);
          templateVars.orders = ordered;
        })
        .then(() => {
          res.render("restaurantPage", templateVars);
        });
    });
});

module.exports = router;

//restaurant Page Set Up
router.post("/", (req, res) => {
  const accountSid = ""; // User Account SID from www.twilio.com/console
  const authToken = ""; // User Auth Token from www.twilio.com/console
  const client = new twilio(accountSid, authToken);
  if (req.body["completed_order_id"]) {
    client.messages
      .create({
        body: `Order Completed - Please pickup from restaurant`,
        to: "+1", // Text to User
        from: "+1" // From Twilio (valid Twilio Number)
      })
      .then(message => message.sid);
    database.updateOrderStatus(req.body["completed_order_id"], "Completed");
  } else {
    client.messages
      .create({
        body: `Order Accepted - Ready in ${req.body.time} minutes`,
        to: "+1", // Text to User
        from: "+1" // From Twilio (valid Twilio Number)
      })
      .then(message => message.sid);
    database.updateOrderStatus(
      req.body.order_id,
      (req.body.time = "Accepted - In Progress")
    );
  }
  res.redirect("restaurantPage");
});
