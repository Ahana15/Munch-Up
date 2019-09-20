// const database = require('./database');
// const apiRoutes = require('./apiRoutes');
// const userRoutes = require('./userRoutes');
const homeRoute = require('./userRoutes/homeRoute');
const loginRoute = require('./userRoutes/loginRoute');
const logoutRoute = require('./userRoutes/logoutRoute');
const orderRoute = require('./userRoutes/orderRoute');
const registerRoute = require('./userRoutes/registerRoute');
const restaurantLoginRoute = require('./restaurantRoutes/restaurantLoginRoute');
const restaurant1Route = require('./userRoutes/restaurant1Route');

const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

const app = express();

// app.use(cookieSession({
//   name: 'session',
//   keys: ['key1']
// }));

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));


// /api/endpoints
const apiRouter = express.Router();
// apiRoutes(apiRouter, database);
// app.use('/api', apiRouter);

// /user/endpoints
// const userRouter = express.Router();
// userRoutes(userRouter, database);
// app.use('/users', userRouter);
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', homeRoute);
app.use('/login', loginRoute);
app.use('/logout', logoutRoute);
app.use('/order', orderRoute);
app.use('/register', registerRoute);
app.use('/restaurant1', restaurant1Route);

app.use('/restaurantlogin', restaurantLoginRoute);



const port = process.env.PORT || 3000;
app.listen(port, (err) => console.log(err || `listening on port ${port} 😎`));





// app.get("/", (req, res) => {
//   console.log('Home Page Hello');
//   res.send('Home Page Hello');
//   // res.send("🤗");
// });


//  twilio

// const accountSid = 'ACa9aa2d9bcadd145935bac5e690d4c63a'; // Your Account SID from www.twilio.com/console
// const authToken = '085458a61269493e6b8941a2b675ab84';   // Your Auth Token from www.twilio.com/console

// const twilio = require('twilio');
// const client = new twilio(accountSid, authToken);

// client.messages.create({
//   body: 'i know what you did...',
//   to: '+14164347869',  // Text this number
//   from: '+16474906192' // From a valid Twilio number
// })
//   .then((message) => console.log(message.sid));