const express = require('express');
const router = express.Router();

router.use('/characters', require('./modules/characters/characters.routes'));

module.exports = router;