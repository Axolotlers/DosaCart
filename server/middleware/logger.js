module.exports = function(req, res, next) {
    console.log('Middleware Request Logger::> ');
    next();
};