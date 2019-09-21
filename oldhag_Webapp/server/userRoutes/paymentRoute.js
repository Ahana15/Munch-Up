const express = require("express");
const router = express.Router();

const twilio = require('twilio');



//Payment Page Set Up
router.get("/", (req, res) => {
  console.log("Payment Page");
  res.render("payment");
});

module.exports = router;


router.post('/', (req, res) => {
  
  res.redirect('/payment');
})

//Twilio - Restuarant
// const accountSid = 'ACa9aa2d9bcadd145935bac5e690d4c63a'; // RESTAURANT Account SID from www.twilio.com/console
// const authToken = '085458a61269493e6b8941a2b675ab84';   // RESTAURANT Auth Token from www.twilio.com/console
// const client = new twilio(accountSid, authToken);
// client.messages.create({
//   body: 'A customer places an order........ ',
//   to: '+14164347869',  // Text to Restaurant
//   from: '+16474906192' // From Twilio(valid Twilio Number)
// })
//   .then((message) => console.log(message.sid));

