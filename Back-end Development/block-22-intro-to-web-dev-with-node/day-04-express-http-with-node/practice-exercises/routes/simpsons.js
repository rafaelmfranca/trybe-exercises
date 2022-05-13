const express = require('express');
const { getSimpsons, addNewSimpson } = require('../utils/fs-utils');
const findSimpsonById = require('../utils/search-utils');
const router = express.Router();

router
  .route('/')
  .get((_, res) => {
    const simpsons = getSimpsons();
    res.status(200).json(simpsons);
  })
  .post((req, res) => {
    const { id, name } = req.body;

    const simpson = findSimpsonById(id);
    if (simpson) return res.status(409).json({ message: 'Id already exists' });

    addNewSimpson({ id, name });
    res.status(204).end();
  });

router.route('/:id').get((req, res) => {
  const { id } = req.params;
  const simpson = findSimpsonById(id);

  return simpson
    ? res.status(200).json(simpson)
    : res.status(404).json({ message: 'Simpson not found' });
});

module.exports = router;
