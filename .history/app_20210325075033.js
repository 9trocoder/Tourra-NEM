const express = require('express');

const app = express();

app.get('/', (req, res) => {});
const port = 3000;

app.listen(port, () => {
  console.log(`App is running on port ${port}.....`);
});
