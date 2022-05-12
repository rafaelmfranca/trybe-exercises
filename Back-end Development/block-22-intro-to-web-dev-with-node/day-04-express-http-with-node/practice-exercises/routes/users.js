const express = require('express');
const router = express.Router();

router.route('/:name/:age').put((req, res) => {
  const { name, age } = req.params;
  res
    .status(200)
    .json({ message: `Your name is ${name} and you are ${age} years old` });
});

module.exports = router;
