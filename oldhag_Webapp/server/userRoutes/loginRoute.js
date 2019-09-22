const express = require("express");
const router = express.Router();
const database = require("../database");


//Login Page Set Up
router.get("/", (req, res) => {
  res.render("login");
  
});


router.post("/", (req, res) => {
  database
    .login(req.body.email, req.body.password)
    .then(user => {
      if (!user) {
        res.send("user doesn't exist. please register");
        return;
      }
      req.session.user_id = user.id;
      req.session.user_name = user.name;
      req.session.email = user.email;
      res.redirect("/");
    })
    .catch(e => res.send(e));
});

module.exports = router;
