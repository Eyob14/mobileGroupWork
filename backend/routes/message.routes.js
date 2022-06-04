const authJwt = require("../middleware/authJwt");
const messageController = require("../controllers/message.controller");


module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    //this uses the id of the user
    app.get("/api/:id/messages", messageController.getMessages);

    //deletes a specific user's messages from the database
    app.delete("/api/:userid/messages/:msgid", messageController.deleteMessage);

    //this uses the id of the ur
    app.post("/api/:id/message", messageController.createMessage);

    //updates the specific message for specific person
    app.put("/api/:userid/messages/:msgid", messageController.updateMessage);

};