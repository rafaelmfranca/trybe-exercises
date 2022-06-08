const express = require('express');
const errorMiddleware = require('./src/middlewares/error');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(require('./routes'));

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
