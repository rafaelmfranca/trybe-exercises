const express = require('express');
const router = express.Router();

router.route('/').post((req, res) => {
  const { name } = req.body;
  res.status(201).json({ message: `Hello ${name}` });
});

module.exports = router;
