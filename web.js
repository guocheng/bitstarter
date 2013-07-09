var express = require('express');

var app = express.createServer(express.logger());

var helloMsg = (fs.readFileSync("index.html")).toString();

app.get('/', function(request, response) {
  response.send(helloMsg);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
