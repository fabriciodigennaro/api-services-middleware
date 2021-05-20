const express = require('express');
const router = express.Router();
const { BitlyValidationMiddleware } = require('../middlewares');
const { BitlyController } = require('../controllers');
const bitlyController = new BitlyController();

router.post('/', BitlyValidationMiddleware, bitlyController.createShortUrl);

module.exports = router;