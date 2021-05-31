const responseOk = {
        total: 1,
        total_hits: 1,
        hits: [
            {
                image_preview: "https://cdn.pixabay.com/photo/2016/10/03/19/42/boca-juniors-1712628_150.jpg",  
                large_image_url: "https://pixabay.com/get/gc66872777d07666b5571568cd4f3aa06576680c3f18363154d7a1ecd1b0276d5aa0b69d003b5f269571c1c61b2e6067d77e71d90411cf25d40e64b2c0a68be23_1280.jpg",
                views: 9769,
                likes: 20,
                },
        ]
    };

const responseError = {
        status: 500,
        message: "Problem connecting with pixabay API"
    }

const responseErrorNotFound = {
    "total": 0,
    "totalHits": 0,
    "hits": []
};

module.exports = {
    responseOk,
    responseError,
    responseErrorNotFound
}
