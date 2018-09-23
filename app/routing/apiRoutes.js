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
        console.log("newUserTally: " + newUserTally);
        var bestMatch = 100;
        var scoresDifference = 0;
        var newFriend = {
            name: "",
            photo: ""
        };
        
        for (var i = 0; i<friendsArray.length; i++) {
            console.log(friendsArray[i].name);
            console.log(friendsArray[i].scores);
            scoresDifference = 0;
 
            for (var l = 0; l<newUserTally; l++) {
                scoresDifference += (Math.abs(parseInt(newUserTally.scores[l]) - parseInt(friendsArray[i].scores[l])));
            }
            if (scoresDifference < bestMatch) {
                bestMatch = scoresDifference;
                newFriend= friendsArray[i];
                console.log ("newFriend Name: " + newFriend.name);
            }
        } 
        // this is sending the newest person into the friendsArray
        friendsArray.push(request.body);

    
        // this is sending the match back to the user to be populated in the modal box, and .json only allows for ONE argument, not two.
        response.json(friendsArray);
    });
};
