const express = require("express");
const router = express.Router();
const twilio = require("twilio");

//restaurant Page Set Up
router.get("/", (req, res) => {
  console.log("Restaurant Page Hello");
  res.render("restaurantPage");
});

module.exports = router;

//restaurant Page Set Up
router.post("/", (req, res) => {
  // Twilio - User;
  const accountSid = "AC6c33d89c431c0e398a0607ed45eed33f"; // User Account SID from www.twilio.com/console
  const authToken = "891e10ad3d7fc8e669491004901509cf"; // User Auth Token from www.twilio.com/console
  const client = new twilio(accountSid, authToken);

  client.messages
    .create({
      body: `Order will be ready in ${req.body.time}`,
      to: "+16476568050", // Text to User
      from: "+15878096371" // From Twilio (valid Twilio Number)
    })
    .then(message => console.log(message.sid));
  console.log("Restaurant Page Hello");
  res.redirect("restaurantPage");
});
