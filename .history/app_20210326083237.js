const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const app = express();

// middleware
app.use(morgan('dev'));

app.use(express.json());

app.use((req, res, next) => {
  console.log('the middleware says hello 🧏‍♂️');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

// route handlers

// all routes

const userRouter = express.Router();

userRouter.route('/').get(getAllUsers).post(createUser);
userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
// start server
const port = 3000;

app.listen(port, () => {
  console.log(`App is running on port ${port}.....`);
});
