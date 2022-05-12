const express = require('express');
const app = express();
const cors = require('cors');
const { recipes, drinks } = require('./data');
const {
  findItemById,
  sortInAlphabeticalOrder,
  filterItemsByNameAndMaxPrice,
} = require('./utils');

app.use(cors());

app.get('/drinks', (_, res) => {
  res.json(sortInAlphabeticalOrder(drinks));
});

app.get('/drinks/search', (req, res) => {
  const { name, maxPrice } = req.query;
  const filteredDrinks = filterItemsByNameAndMaxPrice(drinks, name, maxPrice);

  return filteredDrinks.length > 0
    ? res.json(filteredDrinks)
    : res.status(404).json({ error: 'No drink found' });
});

app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drink = findItemById(drinks, id);

  return drink
    ? res.json(drink)
    : res.status(404).json({ error: 'Drink not found' });
});

app.get('/recipes', (_, res) => {
  res.json(sortInAlphabeticalOrder(recipes));
});

app.get('/recipes/search', (req, res) => {
  const { name, maxPrice } = req.query;
  const filteredRecipes = filterItemsByNameAndMaxPrice(recipes, name, maxPrice);

  return filteredRecipes.length > 0
    ? res.json(filteredRecipes)
    : res.status(404).json({ error: 'No recipe found' });
});

app.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipe = findItemById(recipes, id);

  return recipe
    ? res.json(recipe)
    : res.status(404).json({ error: 'Recipe not found' });
});

app.listen(3001, () => {
  console.log('Application listening on port 3001');
});
