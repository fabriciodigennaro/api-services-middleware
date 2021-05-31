const apiResponseOk = {
    "created_at": "2021-05-06T15:20:52+0000",
    "id": "bit.ly/3usiGLP",
    "link": "https://bit.ly/2QCiUBv",
    "custom_bitlinks": [],
    "long_url": "http://www.google.com/",
    "archived": false,
    "tags": [],
    "deeplinks": [],
    "references": {
        "group": "https://api-ssl.bitly.com/v4/groups/Bl51nCLP9RG"
    }
};

const apiResponseIncomplete = {
    "created_at": "2021-05-06T15:20:52+0000",
    "id": "bit.ly/3usiGLP",
    // "link": "https://bit.ly/3usiGLP",
    // "custom_bitlinks": [],
    "long_url": "https://flaviocopes.com/axios-send-authorization-header/",
    "archived": false,
    "tags": [],
    "deeplinks": [],
    "references": {
        "group": "https://api-ssl.bitly.com/v4/groups/Bl51nCLP9RG"
    }
};

const apiNotFoundResponse = {
        "status": 400,
        "message": "Please insert a valid URL"
    };

module.exports = {
    apiResponseOk,
    apiResponseIncomplete,
    apiNotFoundResponse
}
