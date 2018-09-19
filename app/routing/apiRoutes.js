var bodyParser = require("body-parser");
var express = require("express");
var friendsArray = require("../data/friends");

var app = express();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());


module.exports = function(app) {
    // this is the get route from express
    app.get("/api/friends", function (request, response) {
        response.json(friendsArray);
    });

    // this is the post route from express
    app.post("/api/friends", function(request, response) {
        var newUserTally = request.body.scores;
        var tallyArray = [];
        var bestMatch = 0;
        
        for (var i = 0; i<friendsArray.length; i++) {
            var scoresDifference = 0;

            for (var l = 0; l<newUserTally; l++) {
                scoresDifference += (Math.abs(parseInt(friendsArray[i].scores[l]) - parseInt(newUserTally[l])));
            }
            tallyArray.push(scoresDifference);
            console.log(scoresDifference);
        } 
        for(var m = 0; m<tallyArray.length; m++) {
            if (tallyArray[m] <= tallyArray[bestMatch]) {
                bestMatch = m;
                console.log(bestMatch);
            }
        }
        var newFriend = friendsArray[bestMatch];
        console.log(newFriend);
        // var newFriendPhoto = friendsArray[bestMatch].photo;
        // this is sending the match back to the user to be populated in the modal box, and .json only allows for ONE argument, not two.
        response.json(newFriend);

        // this is sending the newest person into the friendsArray
        friendsArray.push(request.body);
    });
};
