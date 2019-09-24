// const database = require('./database');
// const apiRoutes = require('./apiRoutes');
// const userRoutes = require('./userRoutes');
const homeRoute = require("./userRoutes/homeRoute");
const loginRoute = require("./userRoutes/loginRoute");
const logoutRoute = require("./userRoutes/logoutRoute");
const orderRoute = require("./userRoutes/orderRoute");
const registerRoute = require("./userRoutes/registerRoute");
const restaurant1Route = require("./userRoutes/restaurant1Route");
const paymentRoute = require("./userRoutes/paymentRoute");
const userOrderStatusRoute = require("./userRoutes/userOrderStatusRoute");
const restaurantListRoute = require("./userRoutes/restaurantListRoute");

const restaurantLoginRoute = require("./restaurantRoutes/restaurantLoginRoute");
const restaurantPageRoute = require("./restaurantRoutes/restaurantPageRoute");

const database = require("./database");

const express = require("express");
// const path = require("path");
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

// /api/endpoints
const apiRouter = express.Router();
// apiRoutes(apiRouter, database);
// app.use('/api', apiRouter);

// /user/endpoints
// const userRouter = express.Router();
// userRoutes(userRouter, database);
// app.use('/users', userRouter);

app.use("/", homeRoute);
app.use("/login", loginRoute);
app.use("/logout", logoutRoute);
app.use("/order", orderRoute);
app.use("/register", registerRoute);
app.use("/restaurant1", restaurant1Route);
app.use("/payment", paymentRoute);
app.use("/userorderstatus", userOrderStatusRoute);
app.use("/restaurantlist", restaurantListRoute);

app.use("/restaurantlogin", restaurantLoginRoute);
app.use("/restaurantpage", restaurantPageRoute);

const port = process.env.PORT || 3000;
app.listen(port, err => console.log(err || `listening on port ${port} 😎`));

// app.get("/", (req, res) => {
//   console.log('Home Page Hello');
//   res.send('Home Page Hello');
//   // res.send("🤗");
// });
