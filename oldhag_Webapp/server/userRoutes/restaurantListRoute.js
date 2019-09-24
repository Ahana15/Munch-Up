const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {

  let templateVars = {
    user_id: req.session.user_id,
    user_email: req.session.email,
    user_name: req.session.user_name
  };
  res.render("restaurantList", templateVars);
});

module.exports = router;