// Dependencies
// =============================================================

var a = require("./app/routing/htmlRoutes.js");
var express = require("express");

var PORT = 3000;

// express.urlencoded() provides middleware for automatically parsing forms with the content-type application/x-www-urlencoded and storing the result as a dictionary (object) in req.body
// The "extended" syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded.
a.app.use(express.urlencoded({ extended: true }));

// This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
// A new body object containing the parsed data is populated on the request object after the middleware
a.app.use(express.json());




  // Starts the server to begin listening
// =============================================================
// Bind our application to the TCP PORT to start listening
a.app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  