const axios = require('axios');

class NewsAPI {

    getNews = async (country, category) => {
        try {
            const URL = process.env.NEWS_URL + country + '&category=' + category + '&apiKey=' + process.env.NEWS_API_KEY;
            let response = await axios.get(URL);
            return response.data;
        } catch (error) {
            console.error(error.message);
            throw new Error('Problem connecting with News API');
        }    
    }
}

module.exports = NewsAPI;