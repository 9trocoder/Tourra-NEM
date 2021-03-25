const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'the server said hello!', app: 'Tourra' });
});

app.post('/');

const port = 3000;

app.listen(port, () => {
  console.log(`App is running on port ${port}.....`);
});
