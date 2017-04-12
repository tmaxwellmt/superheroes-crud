var mongoose = require('mongoose');

var VillainSchema = new mongoose.Schema({
  name: String,
  superPowers: { default: [], type: Array},
  universe: String,
  evil: String,
  rank: Number,
  img: String
});

VillainSchema.methods.loadData = function(data) {

  this.name = data.name ? data.name : this.name;
  this.universe = data.universe ? data.universe : this.universe;
  this.evil = data.evil ? data.evil : this.evil;
  this.rank = data.rank ? data.rank : this.rank;
  this.img = data.img ? data.img : this.img;
}

VillainSchema.methods.loadPower = function (powerN) {
  this.superPowers.push (powerN);
}
module.exports = mongoose.model('Villain', VillainSchema);
