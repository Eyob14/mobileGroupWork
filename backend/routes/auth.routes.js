const controller = require('../controllers/auth.controller');
const auth = require('../middleware/authJwt')
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.post(
        "/api/signup",auth.checkDuplicateEmail, controller.signup
    );
    app.post("/api/signin", controller.signin);
};