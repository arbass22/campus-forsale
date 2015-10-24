var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// var router = express.Router();

var Book = require('./../database/models/book');
mongoose.connect('mongodb://localhost/books');

app.post('/:id', function(req, res) {
  var book = new Book(req.body);
  book.save(function(err) {
    if (err)
      res.json(err);
    else
      res.json(book);
  });
});
