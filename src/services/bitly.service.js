const { BitlyAPI } = require('../apis');


class BitlyService {

    constructor() {
        this._bitlyAPI = new BitlyAPI();
    }
    
    createShortUrl = async (longUrl) => {
        const response = await this._bitlyAPI.createShortUrl(longUrl);
        return this.buildShortUrlResponse(response);
    }

    buildShortUrlResponse = (response) => {
        return {
            long_url: response.long_url,
            short_url: response.link,
        }
    }

};

module.exports = BitlyService;