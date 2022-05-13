const express = require('express');
const { getSimpsons } = require('../utils/fs-utils');
const router = express.Router();

router.route('/').get((_, res) => {
  const simpsons = getSimpsons();
  res.status(200).json(simpsons);
});

module.exports = router;
