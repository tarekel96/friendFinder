// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "home.html"));
      });

app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "survey.html"));
      });


app.listen(PORT, function() {
        console.log("App listening on PORT: " + PORT);
})
