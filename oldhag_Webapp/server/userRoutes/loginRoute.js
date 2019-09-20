const express = require("express");
const router = express.Router();
const database = require("../database");
const cookieSession = require("cookie-session");
const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["key1"]
  })
);

//Home Page Set Up
router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", (req, res) => {
  const { email, password } = req.body;
  database
    .login(email, password)
    .then(user => {
      if (!user) {
        res.send("error");
        return;
      }
      req.session.userId = user.id;
      res.send("Logged in");
    })
    .catch(e => res.send(e));
});

module.exports = router;
