const express = require('express');

const app = express();

app.use(express.json());

app.use('/users', require('./controllers/userController'));

app.listen(process.env.PORT, () => {
  console.log('Server started!');
});
