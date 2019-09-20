const express = require("express");
const router = express.Router();

//Home Page Set Up
router.get("/", (req, res) => {
  res.render("login");
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  login(email, password)
    .then(user => {
      if (!user) {
        res.send({ error: "error" });
        return;
      }
      req.session.userId = user.id;
      res.send({ user: { name: user.name, email: user.email, id: user.id } });
    })
    .catch(e => res.send(e));
});

module.exports = router;
