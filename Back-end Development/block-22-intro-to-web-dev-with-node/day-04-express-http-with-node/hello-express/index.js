const express = require('express');
const app = express();
const cors = require('cors');
const { recipes, drinks } = require('./data');
const { findItemById, sortInAlphabeticalOrder } = require('./utils');

app.use(cors());

app.get('/drinks', (_, res) => {
  res.json(sortInAlphabeticalOrder(drinks));
});

app.get('/recipes', (_, res) => {
  res.json(sortInAlphabeticalOrder(recipes));
});

app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drink = findItemById(drinks, id);

  return drink
    ? res.json(drink)
    : res.status(404).json({ error: 'Drink not found' });
});

app.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipe = findItemById(recipes, id);

  return recipe
    ? res.json(recipe)
    : res.status(404).json({ error: 'Recipe not found' });
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
