var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.resolve('./public')));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
