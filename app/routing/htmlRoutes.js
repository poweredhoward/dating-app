var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friend = require("./../data/friends.js").Friend;
var friends = require("./../data/friends.js").friends;
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = function(app) {

    app.get("/survey", (req,res)=>{
        res.sendFile(path.join(__dirname, "./../public/survey.html"));
    });

    app.get("/", (req,res)=>{
        res.sendFile(path.join(__dirname, "./../public/index.html"));
    });
}