var mongoose = require('mongoose');

var SuperheroSchema = new mongoose.Schema({
  name: String,
  superPower: String,
  universe: String,
  evil: String,
  rank: Number
});

module.exports = mongoose.model('Superhero', SuperheroSchema);
