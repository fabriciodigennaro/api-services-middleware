const axios = require('axios');
const config = require('../config');

class NewsAPI {

    getNews = async (country, category) => {
        try {
            const URL = config.NEWS_BASE_URL + "/v2/top-headlines?country=" + country + '&category=' + category + '&apiKey=' + config.NEWS_API_KEY;
            let response = await axios.get(URL);
            return response.data;
        } catch (error) {
            if(error.response.status >= 400 && error.response.status < 500) {
                let newError =  new Error(error.response.data.message);
                newError.status = error.response.status;
                throw newError;
            }
            throw new Error('Problem connecting with News API');
        }    
    }
}

module.exports = NewsAPI;