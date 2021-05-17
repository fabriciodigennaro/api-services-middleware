const { response } = require('express');
const { WeatherAPI } = require('../apis');

class WeatherService {

    constructor(){
        this._weatherAPI = new WeatherAPI();
    }

    getWeather = async (city) => {
        const response = await this._weatherAPI.getWeatherByCity(city);
        return this.buildWeatherResponse(response);
    }

    buildWeatherResponse = (response) => {
        return {
            temperature: response.main.temp,
            humidity: response.main.humidity,
            weather: response.weather[0].main,
            feels_like: Math.round(response.main.feels_like),
            pressure: response.main.pressure,
            min_temperature: Math.round(response.main.temp_min),
            max_temperature: Math.round(response.main.temp_max), 
            wind: {
                speed: this.getSpeed(response.wind.speed),
                direction: this.getWindDirection(response.wind.deg)
            }          
        }
    }
    // TODO create a function 
    getSpeed(speed){
        return speed;
    }

    getWindDirection(deg){
        return "NE";
    }

}

module.exports = WeatherService;