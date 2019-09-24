const express = require("express");
const router = express.Router();
const twilio = require("twilio");
const database = require("../database");

//restaurant Page Set Up
router.get("/", (req, res) => {
  database
    .getRestaurantOrders(req.session.user_id)
    .then(res => {
      let ordered = database.groupOrders(res);
      return (templateVars = { orders: ordered });
    })
    .then(templateVars => {
      console.log(templateVars);
      templateVars.user_id = req.session.user_id;
      templateVars.user_email = req.session.email;
      templateVars.user_name = req.session.user_name;
      res.render("restaurantPage", templateVars);
    });
});

module.exports = router;

//restaurant Page Set Up
router.post("/", (req, res) => {
  console.log(req.body);
  const accountSid = "AC6c33d89c431c0e398a0607ed45eed33f"; // User Account SID from www.twilio.com/console
  const authToken = "891e10ad3d7fc8e669491004901509cf"; // User Auth Token from www.twilio.com/console
  const client = new twilio(accountSid, authToken);
  if (req.body["completed_order_id"]) {
    client.messages
      .create({
        body: `Order Completed - Please pickup from restaurant`,
        to: "+16476568050", // Text to User
        from: "+15878096371" // From Twilio (valid Twilio Number)
      })
      .then(message => console.log(message.sid));
    database.updateOrderStatus(req.body["completed_order_id"], "Completed");
  } else {
    client.messages
      .create({
        body: `Order Accepted - Ready in ${req.body.time}`,
        to: "+16476568050", // Text to User
        from: "+15878096371" // From Twilio (valid Twilio Number)
      })
      .then(message => console.log(message.sid));
    database.updateOrderStatus(
      req.body.order_id,
      (req.body.time = "Accepted - In Progress")
    );
  }

  // Twilio - User;

  res.redirect("restaurantPage");
});
