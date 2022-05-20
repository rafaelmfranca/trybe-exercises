const express = require('express');
const { ping } = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/ping', ping);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
