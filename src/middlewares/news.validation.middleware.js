module.exports = (req, res, next) => {
    if(req.query.country == '' && req.query.category == '') {
        let error = new Error("country or category param is required");
        error.status = 400;
        throw error; 
    }
    next();
}