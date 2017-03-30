var express = require('express');
var Superhero = require('./models/superhero');

var app = express();

var mongoose = require('mongoose');

//required to connect to our local database.
//it will look for"/" or create a db called superheroes.
mongoose.connect('mongodb://localhost/superheroes');

//app.METHOD('URL LOCATION, fnction(req, res)')

app.get('/test', function(req, res) {
  res.send("You found a test router");
});

// var server = app.listen(3000, function() {
//   console.log('Server running on PORT 3000');
// });
var superHero1 = {
  name: "superman",
  superPower: "strong",
  universe: "DC",
  evil: false,
  rank: 10
};

app.get('/superhero', function (req, res) {
  res.json(superHero1);
});

var server = app.listen(3000, function () {
  console.log('server is running');
});
