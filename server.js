var express = require('express');
var path = require('path');
var Superhero = require('./models/superhero');
var Villain = require('./models/villain');
var app = express();
var bodyParser = require('body-parser');
var heroRoutes = require('./routes/superheroes');
var villainRoutes = require('./routes/villains');

var mongoose = require('mongoose');

//required to connect to our local database.
//it will look for"/" or create a db called superheroes.
mongoose.connect('mongodb://localhost/superheroes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function (req, res) {
  res.render('index')
});

app.get('/goodGuys', function (req, res) {
  res.render('goodGuys')
});

app.get('/badGuys', function (req, res) {
  res.render('badGuys')
});

app.use('/api/superheroes', heroRoutes)

app.use('/api/villains', villainRoutes)

var server = app.listen(3000, function () {
  console.log('server is running');
});

module.exports = app;
