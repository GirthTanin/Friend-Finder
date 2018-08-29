var bodyParser = require("body-parser");
var express = requeire("express");
const friend = require("../data/friends");

var app = express();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());


module.exports = function(app) {
    // this is the get route from express
    app.get("api/friends", function (request, response) {
        response.json(newBestFriend);
    });

    // this is thet post route from express
    app.post("api/friends", (request, response)) 
}