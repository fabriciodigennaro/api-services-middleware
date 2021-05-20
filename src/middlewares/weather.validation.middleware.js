module.exports = (req, res, next) => {
    if(req.query.city == undefined || req.query.city == "") {
        let error = new Error("City query param is required");
        error.status = 400;
        throw error; 
    }
    next();
}