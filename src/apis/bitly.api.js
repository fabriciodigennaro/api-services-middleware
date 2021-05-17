const axios = require('axios');
const config = require('../config');

class BitlyAPI {
    
    createShortUrl = async (longUrl) => {
        try {
            let response = await axios.post(config.BITLY_CREATE_SHORT_URL, 
                                {
                                    long_url: longUrl
                                }, 
                                {
                                    headers: {
                                        'Authorization': `Bearer ${config.BITLY_TOKEN}` ,
                                        "Content-Type": "application/json"
                                    }
                                }
                            );
            return response.data;
            
        } catch (error) {
            if(error.response.status >= 400 && error.response.status < 500) {
                let newError =  new Error(error.response.data.message);
                newError.status = error.response.status;
                throw newError;
            }
            throw new Error('Problem connecting with bitly API');
        }
    }
}

module.exports = BitlyAPI;