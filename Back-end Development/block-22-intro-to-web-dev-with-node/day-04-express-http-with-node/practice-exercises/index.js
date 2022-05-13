const express = require('express');

const app = express();
const port = 3031;

app.use(express.json());

app.use('/ping', require('./routes/ping'));
app.use('/hello', require('./routes/hello'));
app.use('/greetings', require('./routes/greetings'));
app.use('/users', require('./routes/users'));
app.use('/simpsons', require('./routes/simpsons'));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
