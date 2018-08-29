var path = require("path");

module.exports = function(app) {
    // path to the survey statements
    app.get("/survey", function (req, res) {
        res.sendFile(apth.join(__dirname, "../public/survey.html"));
    });
    // path to the home page
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "...public/home.html"));
    });
};