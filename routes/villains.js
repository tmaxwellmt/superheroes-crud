var express = require('express');
var Router = express.Router();
var Villain =  require('../models/villain')

Router.route('/')
  .get(function(req, res) {
    Villain.find(function(err, data) {
      if(err){
        console.log(err);
      } else {
        res.json(data);
      }
    });
  })
  .post(function(req, res){
    var newVillain = new Villain();
    newVillain.loadData(req.body);
    newVillain.save(function(err, vil) {
      if (err) {
        console.log(err);
      } else {
        res.json(vil)
      }
    });
  });

Router.route('/:villain_id')
  .get(function(req, res){
    Villain.findById(req.params.villain_id, function(err, data) {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    })
  })

  .put(function (req, res) {
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

  .delete(function(req, res) {
    Villain.remove({_id: req.params.villain_id}, function(err) {
      if (err) {
        console.log(err);
      } else {
        res.send("Villain deleted");
      }
    })
  });

module.exports = Router;
