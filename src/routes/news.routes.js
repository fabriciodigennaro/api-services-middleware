const express = require('express');
const router = express.Router();
const { NewsValidationMiddleware } = require('../middlewares');
const { NewsController } = require('../controllers');
const newsController = new NewsController();

router.get('/', NewsValidationMiddleware, newsController.getNews);

module.exports = router;