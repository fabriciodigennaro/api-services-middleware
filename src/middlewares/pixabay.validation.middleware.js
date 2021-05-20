module.exports = (req, res, next) => {
    if(req.query.q == undefined || req.query.q == "") {
        let error = new Error("search param is required");
        error.status = 400;
        throw error; 
    }
    if(req.query.images_per_page < 3 || req.query.images_per_page > 200) {
        let error = new Error("images_per_page should be a number between 3 and 200");
        error.status = 400;
        throw error;
    }
    next();
}