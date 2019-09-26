const express = require("express");
const router = express.Router();
const database = require("../database");

router.get("/", (req, res) => {
  database
    .getMenuItems(4, 5)
    .then(items => {
      let templateVars = {
        items,
        user_id: req.session.user_id,
        user_email: req.session.email,
        user_name: req.session.user_name
      };
      res.render("restaurant4", templateVars);
    })
    .catch(err => console.log(err));
});

module.exports = router;
