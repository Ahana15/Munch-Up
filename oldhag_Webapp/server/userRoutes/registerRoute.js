const express = require("express");
const router = express.Router();
const database = require("../database");
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
  let templateVars = {
    user_id: req.session.user_id,
    user_email: req.session.email,
    user_name: req.session.user_name
  };
  res.render("registration", templateVars);
});

router.post("/", (req, res) => {
  const user = req.body;
  user.password = bcrypt.hashSync(user.password, 12);
  database
    .addUser(user)
    .then(user => {
      if (!user) {
        res.send({ error: "error" });
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
