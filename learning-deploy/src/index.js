var express = require('express');
var app = express();
app.get('/', function (req, res) {
  console.log(process.env);
  res.send('Here we go!');
});
app.listen(process.env.PORT || 1337, function () {
  console.log(`Example app listening on port ${process.env.PORT || 1337}!`);
});