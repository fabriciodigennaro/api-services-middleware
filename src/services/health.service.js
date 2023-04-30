
class HealthService {

    constructor() {}
    
    healthStatus() {
        const response = {
            status: 'OK',
            message: 'La salud de la aplicación es buena'
        };
        return {
            statusCode: 200,
            body: JSON.stringify(response)
        };
    
    }

};

module.exports = HealthService;