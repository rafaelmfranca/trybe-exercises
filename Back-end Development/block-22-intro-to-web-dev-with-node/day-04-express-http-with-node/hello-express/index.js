const express = require('express');
const app = express();
const cors = require('cors');
const { recipes, drinks } = require('./data');
const sortInAlphabeticalOrder = require('./utils');

app.use(cors());

app.get('/drinks', (_, res) => {
  res.json(sortInAlphabeticalOrder(drinks));
});

app.get('/recipes', (_, res) => {
  res.json(sortInAlphabeticalOrder(recipes));
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
