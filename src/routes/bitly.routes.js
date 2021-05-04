const express = require('express');
const router = express.Router();
const { BitlyController } = require('../controllers');
const bitlyController = new BitlyController();

router.get('/', bitlyController.getAll);

module.exports = router;