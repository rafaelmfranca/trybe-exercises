const express = require('express');

const router = express.Router();

router.use('/patients', require('./src/routers/patients'));
router.use('/plans', require('./src/routers/plans'));

module.exports = router;
