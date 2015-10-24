var express = require('express');
var app = express();

var ItemHandler = require('./routes/ItemHandler')
var BookHandler = require('./routes/BookHandler')

app.use(express.static('public'));

app.use('/api/items', ItemHandler)
app.use('/api/books', BookHandler)

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
