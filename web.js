var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var input = "index.html";

app.get('/', function(request, response) {
  response.send(fs.readFileSync(input).toString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});