var express = require("express");
var path = require("path");


// Sets up the Express App
// =============================================================
// Express extends NODE HTTP objects
// express() calls the express function and gives us an application instance that we save to our app variable
// on the app object, now we can create routes such as http GET or POST requests
var a = require("./apiRoutes.js");


a.app.get("/", function(req, res) {
    console.log(res)
    // Use express .sendFile method which takes the path of the file we want to serve to the client
    // The path.join() method joins all given path segments together
    // __dirname returns the path of the current application
    res.sendFile(path.join(__dirname, "..", "public", "home.html"));
    
  });

a.app.get("/survey", function(req, res) {
    console.log(res)
    // Use express .sendFile method which takes the path of the file we want to serve to the client
    // The path.join() method joins all given path segments together
    // __dirname returns the path of the current application
    res.sendFile(path.join(__dirname, "..", "public", "survey.html"));
    
  });

  module.exports = {
    a: a
  };


