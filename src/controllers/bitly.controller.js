
class BitlyController {

    constructor() {

    }

    getAll = async (req, res, next) => {
        // comunicarse con la api de bitly
        res.send("bitly controller!")
    }

};

module.exports = BitlyController;