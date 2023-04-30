const { HealthService } = require('../services');


class HealthController {

    constructor() {
        this._healthService = new HealthService;
    }

    sendStatus = async (req, res, next) => {
        try {
            res.send(this._healthService.healthStatus());
        } catch (error) {
            next(error);
        }
    }

};

module.exports = HealthController;