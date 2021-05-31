const responseOk = {
    "total_results": 1,
    "articles": [
        {
            "image": "https://cdn.portfolio.hu/articles/images-xl/t/e/s/tesla-453176.jpg",
            "source_name": "Portfolio.hu",
            "title": "Elon Musk földbe döngöli a bitcoint, megy vele minden a levesbe - Portfolio",
            "description": "Elon Musk pálfordulását követően csúnya esés alakult ki a kriptodevizák piacán, miután a Tesla-vezér keményen nekiment a korábban általa népszerűsített bitcoinnak. Természetesen a kriptopiacon továbbra is annyira meghatározó eszköz a bitcoin, hogy ez magával …",
            "url": "https://www.portfolio.hu/uzlet/20210517/elon-musk-foldbe-dongoli-a-bitcoint-megy-vele-minden-a-levesbe-483430"
        },
    ]
};

const responseError = {
    status: 500,
    message: "Problem connecting with News API"
}

const responseErrorNotFound = {
    "status": 404,
    "message": "city not found"
};

module.exports = {
    responseOk,
    responseError,
    responseErrorNotFound
}