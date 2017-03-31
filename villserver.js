var express = require('express');
var Villain = require('./models/villain');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

//required to connect to our local database.
//it will look for"/" or create a db called superheroes.
mongoose.connect('mongodb://localhost/villain');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/villain', function(req, res) {

  Villain.find(function(err, data) {
    if(err){
      console.log(err);
    } else {
      res.json(data);
    }
  });

});

app.post('/villain', function(req, res){
  var newVillain = new Villain({
    name: req.body.name,
    superPower: req.body.superPower,
    evil: req.body.evil,
    nemesis: req.body.nemesis,
  });
  newVillain.save(function(err, vil) {
    if (err) {
      console.log(err);
    } else {
      res.json(vil)
    }
  });
})

app.get('/villain/:villain_id', function(req, res){
  Villain.findById(req.params.villain_id, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  })
});

app.delete('/villain/:villain_id', function(req, res) {
  Villain.remove({_id: req.params.Villain_id}, function(err) {
    if (err) {
      console.log(err);
    } else {
      res.send("Villain deleted");
    }
  })
});

var villserver = app.listen(3000, function () {
  console.log('server is running');
});
