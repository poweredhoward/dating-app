var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friend = require("./data/friends.js").Friend;
var friends = require("./data/friends.js").friends;

var PORT = process.env.PORT || 3000;

var best_match = {
    friend: null,
    difference: null
};


var app = express();

app.get("/survey", (req,res)=>{
    res.sendFile(path.join(__dirname, "public/survey.html"));
});

app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/api/friends", (req,res)=>{
    // res.json(friends);
    res.json(JSON.stringify(friends));
});

app.post("/api/friends", (req,res)=>{
    var f = req.params.friend;

    
    for(var i=0 ; i<friends.length ; i++){
        var difference = 0;
        for(var j=0 ; j<friends[i].length ; j++){
            difference += Math.abs(friends[i].scores[j] - f.scores[j]);
        }
        if(best_match !== null && difference < best_match.difference){
            best_match.friend = friends[i];
            best_match.difference = difference;
        }
    }

    friends.push(f);
    res.json(best_match.friend);//GIVE RESULT
});

app.listen(PORT, function(){
    console.log("App listening on port " + PORT);
})