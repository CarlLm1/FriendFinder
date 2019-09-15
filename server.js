// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var apiRoutes = require("./app/routing/apiRoutes")
var htmlRoutes = require("./app/routing/htmlRoutes")


var app = express();
var PORT = 3000;

var PORT = process.env.PORT || 8080

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(apiRoutes)
app.use(htmlRoutes)



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
