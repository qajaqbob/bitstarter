var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var input = "index.html";
var buffer =  fs.readFileSync(input)g */

app.get('/', function(request, response) {
    response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});