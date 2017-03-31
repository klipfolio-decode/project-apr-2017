var express = require('express');
var app = express();

var port = 8080;

var router = express.Router();

app.get('/hello', function(req, res) {
    res.json({ message: 'Hello World!' });
});

app.listen(port, function() {
  console.log("server started at port " + port);
});
