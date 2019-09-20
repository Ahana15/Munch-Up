// const database = require('./database');
// const apiRoutes = require('./apiRoutes');
// const userRoutes = require('./userRoutes');
const homeRoute = require('./userRoutes/homeRoute');
const loginRoute = require('./userRoutes/loginRoute');
const logoutRoute = require('./userRoutes/logoutRoute');
const orderRoute = require('./userRoutes/orderRoute');
const registerRoute = require('./userRoutes/registerRoute');
const restaurantLoginRoute = require('./restaurantRoutes/restaurantLoginRoute');

const express = require('express');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

const app = express();

// app.use(cookieSession({
//   name: 'session',
//   keys: ['key1']
// }));

app.use(bodyParser.urlencoded({ extended: false }));


// /api/endpoints
const apiRouter = express.Router();
// apiRoutes(apiRouter, database);
// app.use('/api', apiRouter);

// /user/endpoints
// const userRouter = express.Router();
// userRoutes(userRouter, database);
// app.use('/users', userRouter);

// app.use(express.static(path.join(__dirname, '../public')));

app.use('/', homeRoute);
app.use('/login', loginRoute);
app.use('/logout', logoutRoute);
app.use('/order', orderRoute);
app.use('/register', registerRoute);
app.use('/restaurantlogin', restaurantLoginRoute);



const port = process.env.PORT || 3000;
app.listen(port, (err) => console.log(err || `listening on port ${port} 😎`));





// app.get("/", (req, res) => {
//   console.log('Home Page Hello');
//   res.send('Home Page Hello');
//   // res.send("🤗");
// });