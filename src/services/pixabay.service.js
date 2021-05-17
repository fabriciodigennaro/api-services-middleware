const { response } = require('express');
const { PixabayAPI } = require('../apis');


class PixabayService {

    constructor() {
        this._pixabayAPI = new PixabayAPI();
    }

    getImages = async (param, imagesPerPage, actualPage) => {
        const response = await this._pixabayAPI.getImages(param, imagesPerPage, actualPage);
        return this.buildImagesResponse(response);
    }

    buildImagesResponse = (response) => {
        return {
            total: response.total,
            total_hits: response.totalHits,
            hits: response.hits.map(hit => {
                return {
                    image_preview: hit.previewURL,
                    large_image_url: hit.largeImageURL,
                    likes: hit.likes,
                    views: hit.views,
                }
            }) 
        };
    } 
}

module.exports = PixabayService;