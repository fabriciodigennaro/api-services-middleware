const responseOk = {
    "temperature": 12.19,
    "humidity": 87,
    "weather": "Clouds",
    "feels_like": 12,
    "pressure": 1004,
    "min_temperature": 11,
    "max_temperature": 14,
    "wind": {
        "speed": 20,
        "direction": "OSO"
    }
};

const responseError = {
    status: 500,
    message: "Problem connecting with Weather API"
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