const axios = require('axios');
const config = require('../config');


class PixabayAPI {

    getImages = async (param, imagesPerPage, actualPage) => {
        try {
            const URL = config.PIXABAY_BASE_URL + '/api/?key=' + config.PIXABAY_API_KEY + '&q=' + param + 
                        '&per_page=' + imagesPerPage + '&page=' + actualPage;
            let response = await axios.get(URL);
            return response.data;
        } catch (error) {
            console.log(error);
            if(error.response.status >= 400 && error.response.status < 500) {
                let newError =  new Error(error.response.data);
                newError.status = error.response.status;
                throw newError;
            }
            throw new Error('Problem connecting with pixabay API');
        }
    }
}

module.exports = PixabayAPI;