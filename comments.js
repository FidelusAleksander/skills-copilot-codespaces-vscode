// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require("fs");

// Configure server
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Load comments from file
var comments = JSON.parse(fs.readFileSync("comments.json", "utf8"));

// Get comments from server
app.get('/comments', function(req, res) {
  res.json(comments);
});

// Add comment to server
app.post('/comments', function(req, res) {
  var comment = {