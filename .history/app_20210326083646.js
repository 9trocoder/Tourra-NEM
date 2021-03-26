const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const tourRouter;

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

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
// start server
const port = 3000;

app.listen(port, () => {
  console.log(`App is running on port ${port}.....`);
});
