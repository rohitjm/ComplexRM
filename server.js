//required modules
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var Problem = require('./app/models/problem');
var app = express();
var db = require('./config/db');
var port = process.env.PORT || 8080;

//connect to MongoDB using url from config/db
mongoose.connect(db.url,function(err) {
  if (err) throw err;});

mongoose.connection.on("open", function(){
  console.log("mongodb is connected")}  //this gets printed
);

app.use(bodyParser.json());

app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

app.use(bodyParser.urlencoded({ extended: true })); 

app.use(methodOverride('X-HTTP-Method-Override')); 

app.use(express.static(__dirname + '/public')); 

//configure routes
require('./app/routes')(app); // configure our routes

app.listen(port);

console.log("App started on port:",port);

//expose the app
exports = module.exports = app