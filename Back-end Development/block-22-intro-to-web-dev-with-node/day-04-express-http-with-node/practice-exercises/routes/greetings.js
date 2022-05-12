const express = require('express');
const router = express.Router();

router.route('/').post((req, res) => {
  const { name, age } = req.body;

  return Number(age) > 17
    ? res.status(200).json({ message: `Hello ${name}` })
    : res.status(401).json({ message: 'Unauthorized' });
});

module.exports = router;
