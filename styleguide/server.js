var express = require('express');
var compression = require('compression');

var app = express();

app.use(compression());
app.use(express.static(__dirname));

app.listen(process.env.PORT || 8080, function() {
  console.log('Server listening');
});
