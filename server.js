var express = require('express');
var app = express();

//app.METHOD('URL LOCATION, fnction(req, res)')

app.get('/test', function(req, res) {
  res.send("You found a test router");
});

var server = app.listen(3000, function() {
  console.log('Server running on PORT 3000');
});
