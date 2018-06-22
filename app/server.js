var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friend = require("./data/friends.js").Friend;
var friends = require("./data/friends.js").friends;
// console.log(friends);


var PORT = process.env.PORT || 3000;

var best_match = {
    friend: null,
    difference: null
};


// require("./app/routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/survey", (req,res)=>{
    res.sendFile(path.join(__dirname, "public/survey.html"));
});



app.get("/api/friends", (req,res)=>{
    res.json(friends);
});

app.post("/api/friends", (req,res)=>{
    var f = req.body.friend;
    var newperson = new friend(f.name, f.photo, f.answers);
    console.log(newperson);

    
    for(var i=0 ; i<friends.length ; i++){
        var difference = 0;
        for(var j=0 ; j<friends[i].scores.length ; j++){
            difference += Math.abs(friends[i].scores[j] - newperson.scores[j]);
            // console.log("Difference: " + difference);

        }
        if(best_match.friend === null){
            best_match.friend = friends[i];
            best_match.difference = difference;
        }
        else if(difference < best_match.difference){
            best_match.friend = friends[i];
            best_match.difference = difference;
        }
    }

    friends.push(newperson);
    console.log(best_match);
    res.json(best_match.friend);//GIVE RESULT
    //res.redirect("/survey");
});

app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, "public/index.html"));
});
app.listen(PORT, function(){
    console.log("App listening on port " + PORT);
})