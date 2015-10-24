var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var ItemHandler = require('./routes/ItemHandler');
var SearchHandler = require('./routes/SearchHandler');

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(function(err, req, res, next){
  if(err instanceof SyntaxError){
    res.status(400);
    res.send('400 error - SyntaxError');
  } else {
    next(err);
  }
});
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/items', ItemHandler);
app.use('/api/search', SearchHandler);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
