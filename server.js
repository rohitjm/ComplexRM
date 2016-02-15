//required modules
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();
var db = require('./config/db');
var port = process.env.PORT || 8080;

mongoose.connect(db.url);