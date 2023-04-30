const express = require('express');
const router = express.Router();
const { HealthController } = require('../controllers');
const healthController = new HealthController();


router.get('/', healthController.sendStatus);

module.exports = router;