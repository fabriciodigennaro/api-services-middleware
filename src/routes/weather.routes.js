const express = require('express');
const router = express.Router();
const { WeatherValidationMiddleware } = require('../middlewares')
const { WeatherController } = require('../controllers');
const weatherController = new WeatherController();


router.get('/', WeatherValidationMiddleware, weatherController.getWeather);

module.exports = router;