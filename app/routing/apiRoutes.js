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

app.post("/api/friends", function(req, res) {
  // console.log(req)
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware

  console.log(req.body.scores);

  var closestFriend = 0;
  var smallestDiff = 100000000000;

  for (var i = 0; i<f.friends.length; i++) {
    console.log(f.friends[i].scores);
    var diff = 0;
    for (j=0; j<f.friends[i].scores.length; j++) {
      var d = Math.abs(req.body.scores[j] - f.friends[i].scores[j]);
      diff += d;
    }
    console.log(diff);
    if (diff <= smallestDiff) {
      smallestDiff = diff;
      closestFriend = i;
    }
  }

  console.log(smallestDiff);
  console.log(closestFriend);


});


module.exports = {
  app: app
};







  