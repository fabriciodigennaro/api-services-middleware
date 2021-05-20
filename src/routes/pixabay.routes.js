const express = require('express');
const router = express.Router();
const {  PixabayValidationMiddleware } = require('../middlewares');
const { PixabayController } = require('../controllers');
const pixabayController = new PixabayController();

router.get('/',  PixabayValidationMiddleware, pixabayController.getImages);

module.exports = router;