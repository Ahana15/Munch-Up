//Client Side Routes
const homeRoute = require("./userRoutes/homeRoute");
const loginRoute = require("./userRoutes/loginRoute");
const logoutRoute = require("./userRoutes/logoutRoute");
const registerRoute = require("./userRoutes/registerRoute");
const restaurant1Route = require("./userRoutes/restaurant1Route");
const paymentRoute = require("./userRoutes/paymentRoute");
const userOrderStatusRoute = require("./userRoutes/userOrderStatusRoute");
const restaurantListRoute = require("./userRoutes/restaurantListRoute");
const restaurant2Route = require("./userRoutes/restaurant2Route");
const restaurant3Route = require("./userRoutes/restaurant3Route");
const restaurant4Route = require("./userRoutes/restaurant4Route");
//Restaurant Side Routes
const restaurantPageRoute = require("./restaurantRoutes/restaurantPageRoute");

require("dotenv").config();
const express = require("express");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");

const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["id"]
  })
);

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", homeRoute);
app.use("/login", loginRoute);
app.use("/logout", logoutRoute);
app.use("/register", registerRoute);
app.use("/restaurant1", restaurant1Route);
app.use("/payment", paymentRoute);
app.use("/userorderstatus", userOrderStatusRoute);
app.use("/restaurantlist", restaurantListRoute);
app.use("/restaurant2", restaurant2Route);
app.use("/restaurant3", restaurant3Route);
app.use("/restaurant4", restaurant4Route);

app.use("/restaurantpage", restaurantPageRoute);

const port = process.env.PORT || 3000;
app.listen(port, err => console.log(err || `listening on port ${port} 😎`));
