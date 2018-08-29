var bodyParser = require("body-parser");
var express = require("express");
var friendsArray = require("../data/friends");

var app = express();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());


module.realFriendsArray = function(app) {
    // this is the get route from express
    app.get("api/friends", function (request, response) {
        response.json(newBestFriends);
    });

    // this is thet post route from express
    app.post("api/friends", function(request, response) {
        var newUser = request.body;
        var newUserTally = request.body.scores
        var tallyArray = [];
        var realFriendCount = 0;
        var bestMatch = 0;
        
        for (var i = 0; i<newBestFriends.length; i++) {
            var scoresDifference = 0;

            for (var l = 0; l<newUserTally; l++) {
                scoresDifference += (Math.abs(parseInt(newBestFriends[i].scores[l]) - parseInt(newUserTally[j])));
            }
            tallyArray.push(scoresDifference);
        } 
        for(var i = 0; i<tallyArray.length; i++) {
            if (tallyArray[i] <= tallyArray[bestMatch]) {
                bestMatch = i;
            }
        }
        var newBestFriend = friendsArray[bestMatch];
        response.json(newBestFriend);

        friendsArray.push(req, body);
    });
};
