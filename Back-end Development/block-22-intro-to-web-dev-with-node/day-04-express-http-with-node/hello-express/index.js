const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { recipes, drinks } = require('./data');
const {
  findItemById,
  sortInAlphabeticalOrder,
  filterItemsByNameAndPrice,
  updateItemById,
  findIndexById,
} = require('./utils');

const app = express();

app.use(express.json());
app.use(cors());

app
  .route('/drinks')
  .get((_, res) => {
    res.json(sortInAlphabeticalOrder(drinks));
  })
  .post((req, res) => {
    const { id, name, price } = req.body;
    drinks.push({ id, name, price });
    res.status(201).json({ message: 'Drink created successfully' });
  });

app.get('/drinks/search', (req, res) => {
  const { name, minPrice, maxPrice } = req.query;
  const filteredDrinks = filterItemsByNameAndPrice(
    drinks,
    name,
    minPrice,
    maxPrice
  );

  return filteredDrinks.length > 0
    ? res.json(filteredDrinks)
    : res.status(404).json({ error: 'No drink found' });
});

app
  .route('/drinks/:id')
  .get((req, res) => {
    const { id } = req.params;
    const drink = findItemById(drinks, id);

    return drink
      ? res.json(drink)
      : res.status(404).json({ error: 'Drink not found' });
  })
  .put((req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;

    const drinkIndex = findIndexById(drinks, id);

    if (drinkIndex === -1)
      return res.status(404).json({ error: 'Drink not found' });

    drinks[drinkIndex] = { ...drinks[drinkIndex], name, price };

    res.status(204).end();
  })
  .delete((req, res) => {
    const { id } = req.params;
    const drinkIndex = findIndexById(drinks, id);

    if (drinkIndex === -1)
      return res.status(404).json({ error: 'Drink not found' });

    drinks.splice(drinkIndex, 1);

    res.status(204).end();
  });

app
  .route('/recipes')
  .get((_, res) => {
    res.json(sortInAlphabeticalOrder(recipes));
  })
  .post((req, res) => {
    const { id, name, price, waitTime } = req.body;
    recipes.push({ id, name, price, waitTime });
    res.status(201).json({ message: 'Recipe created successfully' });
  });

app.get('/recipes/search', (req, res) => {
  const { name, minPrice, maxPrice } = req.query;
  const filteredRecipes = filterItemsByNameAndPrice(
    recipes,
    name,
    minPrice,
    maxPrice
  );

  return filteredRecipes.length > 0
    ? res.json(filteredRecipes)
    : res.status(404).json({ error: 'No recipe found' });
});

app
  .route('/recipes/:id')
  .get((req, res) => {
    const { id } = req.params;
    const recipe = findItemById(recipes, id);

    return recipe
      ? res.json(recipe)
      : res.status(404).json({ error: 'Recipe not found' });
  })
  .put((req, res) => {
    const { id } = req.params;
    const { name, price, waitTime } = req.body;

    const recipeIndex = findIndexById(recipes, id);

    if (recipeIndex === -1)
      return res.status(404).json({ error: 'Recipe not found' });

    recipes[recipeIndex] = { ...recipes[recipeIndex], name, price, waitTime };

    res.status(204).end();
  })
  .delete((req, res) => {
    const { id } = req.params;
    const recipeIndex = findIndexById(recipes, id);

    if (recipeIndex === -1)
      return res.status(404).json({ error: 'Recipe not found' });

    recipes.splice(recipeIndex, 1);

    res.status(204).end();
  });

app.listen(3001, () => {
  console.log('Application listening on port 3001');
});
