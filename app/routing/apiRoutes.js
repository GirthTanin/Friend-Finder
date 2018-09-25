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
        var newUser = request.body;
        var newUserTally = newUser.scores;
        console.log("newUserTally: " + newUserTally);
        var bestMatch = 100;
        var scoresDifference = 0;
        var newFriend = {
            name: "",
            photo: "",
            compatibility: 1000
        };
        
        for (var i = 0; i<friendsArray.length; i++) {
            console.log("29 " + friendsArray[i].name);
            console.log("30 " + friendsArray[i].scores);
            scoresDifference = 0;

            // This next loop doesn't even seem to be occuring...I can't get it to console.log anything...
            for (var l = 0; l<friendsArray[i].scores[l]; l++) {
                scoresDifference += 
                (Math.abs(parseInt(newUserTally[l]) - parseInt(friendsArray[i].scores[l])));   
            
                if (scoresDifference <= newFriend.compatibility) {
                    newFriend.name = friendsArray[i].name;
                    newFriend.photo = friendsArray[i].photo;
                    newFriend.compatibility = scoresDifference;
                    console.log ("newFriend Name: " + newFriend.name);
                    console.log ("newFriend Photo: " + newFriend.photo);
                }
            }
        } 
        // this is sending the newest person into the friendsArray
        friendsArray.push(request.body);
        console.log("request.body" + JSON.stringify(request.body));
        // console.log("request.body" + request.body);

    
        // this is sending the match back to the user to be populated in the modal box, and .json only allows for ONE argument, not two.
        response.json(newFriend);
        // console.log(friendsArray);
    });
};
