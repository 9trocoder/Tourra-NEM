const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('the server said hello!');
});
const port = 3000;

app.listen(port, () => {
  console.log(`App is running on port ${port}.....`);
});
