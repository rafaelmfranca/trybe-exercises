const express = require('express');

const router = express.Router();

router.use('/patients', require('./src/routers/patients'));

module.exports = router;
