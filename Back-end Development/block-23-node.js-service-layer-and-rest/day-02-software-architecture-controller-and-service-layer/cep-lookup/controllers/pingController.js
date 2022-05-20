const express = require('express');
const router = express.Router();

router.route('/').get((_req, res) => {
  res.status(200).json({ message: 'pong!' });
});

module.exports = router;
