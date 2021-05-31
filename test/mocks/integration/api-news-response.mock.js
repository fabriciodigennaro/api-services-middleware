const apiResponseOk = {
    "status": "ok",
    "totalResults": 1,
    "articles": [
        {
            "source": {
                "id": null,
                "name": "Portfolio.hu"
            },
            "author": "Portfolio.hu",
            "title": "Elon Musk földbe döngöli a bitcoint, megy vele minden a levesbe - Portfolio",
            "description": "Elon Musk pálfordulását követően csúnya esés alakult ki a kriptodevizák piacán, miután a Tesla-vezér keményen nekiment a korábban általa népszerűsített bitcoinnak. Természetesen a kriptopiacon továbbra is annyira meghatározó eszköz a bitcoin, hogy ez magával …",
            "url": "https://www.portfolio.hu/uzlet/20210517/elon-musk-foldbe-dongoli-a-bitcoint-megy-vele-minden-a-levesbe-483430",
            "urlToImage": "https://cdn.portfolio.hu/articles/images-xl/t/e/s/tesla-453176.jpg",
            "publishedAt": "2021-05-17T08:45:00Z",
            "content": "Tovább folytatódott a napokkal ezeltt indult esés a kriptodevizák piacán, amelynek elsdleges kiváltó oka, hogy Elon Musk nyilvánosan nekiment a bitcoinnak. Ezt elször május 12-én tette, mikor bejelen… [+2753 chars]"
        },
    ]
};

const apiResponseIncomplete = {
    "status": "ok",
    "totalResults": 3,
    "articles": [
        {
            "source": {
                "id": null,
                "name": "Portfolio.hu"
            },
            // "author": "Portfolio.hu",
            // "title": "Elon Musk földbe döngöli a bitcoint, megy vele minden a levesbe - Portfolio",
            // "description": "Elon Musk pálfordulását követően csúnya esés alakult ki a kriptodevizák piacán, miután a Tesla-vezér keményen nekiment a korábban általa népszerűsített bitcoinnak. Természetesen a kriptopiacon továbbra is annyira meghatározó eszköz a bitcoin, hogy ez magával …",
            "url": "https://www.portfolio.hu/uzlet/20210517/elon-musk-foldbe-dongoli-a-bitcoint-megy-vele-minden-a-levesbe-483430",
            "urlToImage": "https://cdn.portfolio.hu/articles/images-xl/t/e/s/tesla-453176.jpg",
            "publishedAt": "2021-05-17T08:45:00Z",
            "content": "Tovább folytatódott a napokkal ezeltt indult esés a kriptodevizák piacán, amelynek elsdleges kiváltó oka, hogy Elon Musk nyilvánosan nekiment a bitcoinnak. Ezt elször május 12-én tette, mikor bejelen… [+2753 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Vezess.hu"
            },
            // "author": "",
            // "title": "Teszt: Fiat 500e La Prima - Vezess",
            // "description": "Röviden - Fiat 500e Mi ez? Az 500-as harmadik generációja, 2021-től, már csak elektromos hajtással, akár nyitható tetővel Mit tud? Vigyorra húzni a szádat, amikor csak ránézel és tökéletes",
            "url": "https://www.vezess.hu/ujauto-teszt/2021/05/17/fiat-500e-la-prima-teszt/",
            "urlToImage": "https://vezess2.p3k.hu/app/uploads/2021/05/5d_m2891-700x467.jpeg",
            "publishedAt": "2021-05-17T03:08:04Z",
            "content": "Volt változnivalója az 500-asnak utastér szintjén. Szerencsére azzal, hogy teljesen az alapoktól épülhetett az új, szinte minden ponton fejldni tudott. Csak szinte, mert például anyaghasználat terén … [+2907 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hvg.hu"
            },
            // "author": "HVG Kiadó Zrt.",
            // "title": "Szuperritka, korát megelőző elektromos Mercedes-AMG-t kínálnak eladásra - hvg.hu",
            // "description": "Tucatmodellnek semmiképp sem nevezhető ez a 750 lóerős sirályszárnyas sportkocsi, melyből tucatnyinál is kevesebb készült.",
            "url": "https://hvg.hu/cegauto/20210516_szuperritka_korat_megelozo_elektromos_mercedesamgt_kinalnak_eladasra",
            "urlToImage": "https://images.hvg.hu/image.jpg?id=8923897c-66b9-4519-9413-eda4b8ad207f&view=7fcefbf8-ac48-4ee6-aef5-32203afa118c",
            "publishedAt": "2021-05-16T06:29:38Z",
            "content": "Tucatmodellnek semmiképp sem nevezhet ez a 750 lóers sirályszárnyas sportkocsi, melybl tucatnyinál is kevesebb készült.A Mercedes az 50-es években bemutatott 300 SL-nek kívánt emléket állítani azzal,… [+1565 chars]"
        }
    ]
};

const apiValidationError = {
    "status": "error",
    "code": "parametersMissing",
    "message": "Required parameters are missing. Please set any of the following parameters and try again: sources, q, language, country, category."
}



module.exports = {
    apiResponseOk,
    apiResponseIncomplete,
    apiValidationError,
    
}
