const { NewsAPI } = require('../apis');

class NewsService {

    constructor(){
        this._newsAPI = new NewsAPI();
    }

    getNews = async (country, category) => {
        const response = await this._newsAPI.getNews(country, category);
        return this.buildNewsResponse(response);
    }

    buildNewsResponse = (response) => {
        return {
            total_results: response.totalResults,
            articles: response.articles.map(article => {
                return {
                    image: article.urlToImage,
                    source_name: article.source.name,
                    title: article.title, 
                    description: article.description, 
                    url: article.url,
                }
            })
        };
    }
}

module.exports = NewsService;