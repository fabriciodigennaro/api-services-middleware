const apiResponseOk = {
        "total": 1,
        "totalHits": 1,
        "hits": [
            {
                "id": 1712628,
                "pageURL": "https://pixabay.com/photos/boca-juniors-1712628/",
                "type": "photo",
                "tags": "boca juniors, club atletico boca juniors, stadium",
                "previewURL": "https://cdn.pixabay.com/photo/2016/10/03/19/42/boca-juniors-1712628_150.jpg",
                "previewWidth": 150,
                "previewHeight": 73,
                "webformatURL": "https://pixabay.com/get/g11ab08c38f7ce95f945a3f95c16e85e41e80cd57541c6f2e130e7e7a1014f4c8e4488066439bf9079abc19811d28341245568732f09603d564653f5b39143bdd_640.jpg",
                "webformatWidth": 640,
                "webformatHeight": 312,
                "largeImageURL": "https://pixabay.com/get/gc66872777d07666b5571568cd4f3aa06576680c3f18363154d7a1ecd1b0276d5aa0b69d003b5f269571c1c61b2e6067d77e71d90411cf25d40e64b2c0a68be23_1280.jpg",
                "imageWidth": 4808,
                "imageHeight": 2346,
                "imageSize": 3803291,
                "views": 9769,
                "downloads": 5587,
                "favorites": 17,
                "likes": 20,
                "comments": 1,
                "user_id": 2800144,
                "user": "alexis0612",
                "userImageURL": "https://cdn.pixabay.com/user/2016/10/03/19-49-08-914_250x250.jpg"
            },
        ]
    };

const apiResponseIncomplete = {
    "total": 2,
    "totalHits": 2,
    "hits": [
        {
            // "id": 1712628,
            // "pageURL": "https://pixabay.com/photos/boca-juniors-1712628/",
            // "type": "photo",
            // "tags": "boca juniors, club atletico boca juniors, stadium",
            // "previewURL": "https://cdn.pixabay.com/photo/2016/10/03/19/42/boca-juniors-1712628_150.jpg",
            // "previewWidth": 150,
            // "previewHeight": 73,
            "webformatURL": "https://pixabay.com/get/g11ab08c38f7ce95f945a3f95c16e85e41e80cd57541c6f2e130e7e7a1014f4c8e4488066439bf9079abc19811d28341245568732f09603d564653f5b39143bdd_640.jpg",
            "webformatWidth": 640,
            "webformatHeight": 312,
            "largeImageURL": "https://pixabay.com/get/gc66872777d07666b5571568cd4f3aa06576680c3f18363154d7a1ecd1b0276d5aa0b69d003b5f269571c1c61b2e6067d77e71d90411cf25d40e64b2c0a68be23_1280.jpg",
            "imageWidth": 4808,
            "imageHeight": 2346,
            "imageSize": 3803291,
            "views": 9769,
            "downloads": 5587,
            "favorites": 17,
            "likes": 20,
            "comments": 1,
            "user_id": 2800144,
            "user": "alexis0612",
            "userImageURL": "https://cdn.pixabay.com/user/2016/10/03/19-49-08-914_250x250.jpg"
        },
        {
            // "id": 3232967,
            // "pageURL": "https://pixabay.com/vectors/diego-maradona-football-maradona-3232967/",
            // "type": "vector/svg",
            // "tags": "diego maradona, football, maradona",
            // "previewURL": "https://cdn.pixabay.com/photo/2018/03/17/01/29/diego-maradona-3232967_150.png",
            // "previewWidth": 144,
            // "previewHeight": 150,
            "webformatURL": "https://pixabay.com/get/gdf6b3396aa173eec33a1097f3bf660da1d0b26552b5072c82ff53ac097ec4739b48d20d40da058a05ead25ededdab153a09a8813467c203e3ed06603c7e53775_640.png",
            "webformatWidth": 613,
            "webformatHeight": 640,
            "largeImageURL": "https://pixabay.com/get/gf2649cb5a29a2247184203f74a0a680e09cbbedca1bbc7ccdbe14a85a507e6dc5d16f6e6baf54e0fddf9835671ceb308fc953779e9851f25e35172fdebf9975c_1280.png",
            "imageWidth": 1837,
            "imageHeight": 1920,
            "imageSize": 193290,
            "views": 3913,
            "downloads": 3301,
            "favorites": 7,
            "likes": 13,
            "comments": 1,
            "user_id": 7541814,
            "user": "paasadani",
            "userImageURL": "https://cdn.pixabay.com/user/2019/02/20/22-41-18-956_250x250.jpg"
        }
    ]
  
};

const apiNotFoundResponse = {
    "cod": "404",
    "message": "Not found"
};

module.exports = {
    apiResponseOk,
    apiResponseIncomplete,
    apiNotFoundResponse
}
