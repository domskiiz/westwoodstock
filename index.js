"use strict";

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');

var app = express();

// Serve static files (CSS, images, js files, etc)
app.use(express.static(path.join(__dirname, '/public')));
// Set view engine to HTML so app can render html files
app.engine('html', require('ejs').renderFile);
// Serve favicon
app.use(favicon(path.join(__dirname + '/public/assets/favicon.png')));

// Routes
app.get('/', function(req, res) {
  res.render('index.html');
});

app.get('*', function(req, res) {
  res.send('404: page not found');
});

app.listen(process.env.PORT || 3000);
