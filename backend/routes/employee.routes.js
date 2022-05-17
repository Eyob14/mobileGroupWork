const authJwt  = require("../middleware/authJwt");
const controller = require("../controllers/employee.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.get("/api/all", controller.allAccess);
    app.get("/api/user", [authJwt.verifyToken, authJwt.isEmployee], controller.get_userBoard);
    app.get("/api/updateProfile", [authJwt.verifyToken, authJwt.isEmployee], controller.get_updateProfile);
    app.put("/api/updateProfile", [authJwt.verifyToken, authJwt.isEmployee], controller.post_updateProfile);

};