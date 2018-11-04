// Dependencies
// =============================================================

var express = require("express");
var path = require("path");
var f = require("../data/friends.js");

var app = express();

// express.urlencoded() provides middleware for automatically parsing forms with the content-type application/x-www-urlencoded and storing the result as a dictionary (object) in req.body
// The "extended" syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded.
app.use(express.urlencoded({ extended: true }));

// This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
// A new body object containing the parsed data is populated on the request object after the middleware
app.use(express.json());


// Displays all characters
app.get("/api/friends", function(req, res) {
  return res.json(f.friends);
});


module.exports = {
  app: app
};







  