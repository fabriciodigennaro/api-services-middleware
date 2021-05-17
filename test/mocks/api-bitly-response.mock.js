const responseOk = {
    "created_at": "2021-05-06T15:20:52+0000",
    "id": "bit.ly/3usiGLP",
    "link": "https://bit.ly/3usiGLP",
    "custom_bitlinks": [],
    "long_url": "https://flaviocopes.com/axios-send-authorization-header/",
    "archived": false,
    "tags": [],
    "deeplinks": [],
    "references": {
        "group": "https://api-ssl.bitly.com/v4/groups/Bl51nCLP9RG"
    }
};

const responseIncomplete = {
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

const notFoundResponse = {
    "message": "INVALID_ARG_LONG_URL",
    "resource": "bitlinks",
    "description": "The value provided is invalid.",
    "errors": [
        {
            "field": "long_url",
            "error_code": "invalid"
        }
    ]
};

module.exports = {
    responseOk,
    responseIncomplete,
    notFoundResponse
}
