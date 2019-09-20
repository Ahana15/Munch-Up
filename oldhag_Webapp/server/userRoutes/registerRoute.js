const express = require("express");
const router = express.Router();
const helper = require("../database");
const bcrypt = require("bcrypt");
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
  res.render("registration");
});

router.post("/", (req, res) => {
  const user = req.body;
  user.password = bcrypt.hashSync(user.password, 12);
  helper
    .addUser(user)
    .then(user => {
      console.log("user then")
      console.log(user)
      if (!user) {
        res.send({ error: "error" });
        return;
      }
      console.log(res);
      req.session.userId = user.id;
      res.send({ status: "success", user: user});

    })
    .catch(e => res.send(e));
});

module.exports = router;
