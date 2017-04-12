var express = require('express');
var path = require('path');
var Superhero = require('./models/superhero');
var Villain = require('./models/villain');
var app = express();
var bodyParser = require('body-parser');

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

app.get('/api/superheroes', function(req, res) {

  Superhero.find(function(err, data) {
    if(err){
      console.log(err);
    } else {
      res.json(data);
    }
  });

});

app.get('/api/villains', function(req, res) {

  Villain.find(function(err, data) {
    if(err){
      console.log(err);
    } else {
      res.json(data);
    }
  });

});

app.put('/api/superheroes/:superhero_id', function (req, res) {
  Superhero.findById( req.params.superhero_id, function (err, hero) {

    if (!hero) return res.status(404);
    hero.loadPower(req.body.superPower);
    hero.loadData(req.body);
    hero.save(function(e) {
      if (e) {
        res.status(500).send(e)
      } else {
        res.json(hero);
      }
    })
  })
});

app.put('/api/villains/:villain_id', function (req, res) {
  Villain.findById( req.params.villain_id, function (err, villain) {

    if (!villain) return res.status(404);
    villain.loadPower(req.body.superPower);
    villain.loadData(req.body);
    villain.save(function(e) {
      if (e) {
        res.status(500).send(e)
      } else {
        res.json(villain);
      }
    })
  })
})


app.post('/api/superheroes', function(req, res){
  var newSuper = new Superhero();

  newSuper.loadData(req.body);

  newSuper.save(function(err, sh) {
    if (err) {
      console.log(err);
    } else {
      res.json(sh)
    }
  });
})

app.post('/api/villains', function(req, res){
  var newVillain = new Villain();

  newVillain.loadData(req.body);

  newVillain.save(function(err, vil) {
    if (err) {
      console.log(err);
    } else {
      res.json(vil)
    }
  });
})

app.get('/api/superheroes/:superhero_id', function(req, res){
  Superhero.findById(req.params.superhero_id, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  })
});

app.get('/villains/:villain_id', function(req, res){
  Villain.findById(req.params.villain_id, function(err, data) {
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

app.delete('/villains/:villain_id', function(req, res) {
  Villain.remove({_id: req.params.villain_id}, function(err) {
    if (err) {
      console.log(err);
    } else {
      res.send("Villain deleted");
    }
  })
});

var server = app.listen(3000, function () {
  console.log('server is running');
});
