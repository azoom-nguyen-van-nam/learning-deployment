var express = require('express');
var app = express();
app.get('/', function (req, res) {
  console.log('oke');
  res.send('Here we go!');
});
app.listen(process.env.PORT || 1337, function () {
  console.log('Example app listening on port 1337!');
});