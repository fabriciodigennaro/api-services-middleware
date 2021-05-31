const responseOk = {
    "long_url": "http://www.google.com/",
    "short_url": "https://bit.ly/2QCiUBv"
};

const responseError = {
    status: 500,
    message: "Problem connecting with bitly API"
}

const responseErrorNotFound = {
    "status": 400,
    "message": "Please insert a valid URL"
};

module.exports = {
    responseOk,
    responseError,
    responseErrorNotFound
}