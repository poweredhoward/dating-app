var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friend = require("./data/friends.js").Friend;
var friends = require("./data/friends.js").friends;
var app = express();


var PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/images",express.static("public/images"));


require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);






app.listen(PORT, function(){
    console.log("App listening on port " + PORT);
})