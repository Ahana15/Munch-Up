const express = require("express");
const router = express.Router();
const helper = require("../database");
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
  console.log('inside router.post!!!!');
  // const { email, password } = req.body;
  // console.log(req.body);
  helper
    .login(req.body.email, req.body.password)
    .then(user => {
      console.log(user);
      console.log('success');
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
