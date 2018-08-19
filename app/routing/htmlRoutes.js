var path = require("path");

module.exports = function(app) {
    app.get("/survey", function (req, res) {
        res.sendFile(apth.join(__dirname, "../public/survey.html"));
    });
    // a get route to /survey which should display the survey page
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "...public/home.html"));
    });
    //default, catch-all route that leads to home.html
};