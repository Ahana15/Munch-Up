const express = require("express");
const router = express.Router();
const twilio = require("twilio");
const database = require("../database");


//restaurant Page Set Up
router.get("/", (req, res) => {
  database
  .getRestaurantOrders(req.session.user_id)
  .then(res => {
    return (templateVars = {orders: res});
  })
  .then(templateVars => {
   templateVars.user_id = req.session.user_id;
      templateVars.user_email = req.session.email;
      templateVars.user_name =  req.session.user_name;
      res.render("restaurantPage", templateVars);
  });
});

module.exports = router;

//restaurant Page Set Up
router.post("/", (req, res) => {
 console.log(req.body);
  if (req.body["completed_order_id"]){
    console.log("inside if")
    database.updateOrderStatus(req.body["completed_order_id"],"Completed");
  } else {
    database.updateOrderStatus(req.body.order_id,req.body.time = "Accepted - In Progress");
  }
  








  // // Twilio - User;
  // const accountSid = "AC6c33d89c431c0e398a0607ed45eed33f"; // User Account SID from www.twilio.com/console
  // const authToken = "891e10ad3d7fc8e669491004901509cf"; // User Auth Token from www.twilio.com/console
  // const client = new twilio(accountSid, authToken);

  // client.messages
  //   .create({
  //     body: `Order will be ready in ${req.body.time}`,
  //     to: "+16476568050", // Text to User
  //     from: "+15878096371" // From Twilio (valid Twilio Number)
  //   })
  //   .then(message => console.log(message.sid));
  res.redirect("restaurantPage");
});
