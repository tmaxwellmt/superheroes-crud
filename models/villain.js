var mongoose = require('mongoose');

var VillainSchema = new mongoose.Schema({
  name: String,
  superPower: String,
  evil: Boolean,
  nemesis: String
});

module.exports = mongoose.model('Villain', VillainSchema);
