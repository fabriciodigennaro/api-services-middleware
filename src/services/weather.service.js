const { WeatherAPI } = require('../apis');

class WeatherService {

    constructor(){
        this._weatherAPI = new WeatherAPI();
    }

    getWeather = async (city) => {
        return this._weatherAPI.getWeatherByCity(city);
    }
}

module.exports = WeatherService;