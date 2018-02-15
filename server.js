//server implementation
var express = require('express')
var app = express()                        // create our app w/ express
const path = require('path');
var port     =process.env.PORT || 8081;                // set the port
var bodyParser = require('body-parser'); 
var html = require('html');

//db
var mongoose = require('mongoose');
var config= require("./Data/config.js")  //
mongoose.connect(""); //connecting to the db
//end of db

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
const api=require('./routes.js');
app.use('/api', api);

// Catch all other routes and return the index file
app.use(express.static(path.join(__dirname, '/views')));
app.get('*', (req, res) => {
    // res.sendFile(path.join(__dirname, '../build/index.html'));
    res.send("in *");
    // res.render()
});

app.listen(port);
console.log("App listening on port " + port);
module.exports = app;


// 
// 