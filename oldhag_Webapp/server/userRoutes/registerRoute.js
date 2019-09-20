const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const addUser = require("../database");
//Home Page Set Up
router.get("/", (req, res) => {
  res.render("registration");
});

router.post("/register", (req, res) => {
  const user = req.body;
  user.password = bcrypt.hashSync(user.password, 12);
  database
    .addUser(user)
    .then(user => {
      if (!user) {
        res.send({ error: "error" });
        return;
      }
      req.session.userId = user.id;
    })
    .catch(e => res.send(e));
});

module.exports = router;
