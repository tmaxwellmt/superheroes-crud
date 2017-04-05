var express = require('express');
var path = require('path');
var Superhero = require('./models/superhero');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

//required to connect to our local database.
//it will look for"/" or create a db called superheroes.
mongoose.connect('mongodb://localhost/superheroes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.get('/superheroes', function(req, res) {

  Superhero.find(function(err, data) {
    if(err){
      console.log(err);
    } else {
      res.json(data);
    }
  });

});

app.post('/superheroes', function(req, res){
  var newSuper = new Superhero({
    name: req.body.name,
    superPower: req.body.superPower,
    universe: req.body.universe,
    evil: req.body.evil,
    rank: req.body.rank,
  });
  newSuper.save(function(err, sh) {
    if (err) {
      console.log(err);
    } else {
      res.json(sh)
    }
  });
})

app.get('/superheroes/:superhero_id', function(req, res){
  Superhero.findById(req.params.superhero_id, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  })
});

app.delete('/superheroes/:superhero_id', function(req, res) {
  Superhero.remove({_id: req.params.superhero_id}, function(err) {
    if (err) {
      console.log(err);
    } else {
      res.send("Superhero deleted");
    }
  })
});

var server = app.listen(3000, function () {
  console.log('server is running');
});
