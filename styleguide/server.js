const express = require('express');
const compression = require('compression');

const app = express();

app.use(compression());
app.use(express.static(__dirname));

app.listen(process.env.PORT || 8080, function () {
  console.log('Server listening');
});
