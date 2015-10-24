var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = express.Router();

var Book = require('./../database/models/book');
console.log("got into book handler");

router.get('/:id', function(req, res) {
  mongoose.connect('mongodb://localhost/books');
  Book.findById(req.params.id, function(err, obj) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(obj);
    }
    mongoose.disconnect();
  });
});

router.post('/', function(req, res) {
  mongoose.connect('mongodb://localhost/books');

  var book = new Book(req.body);
  book.save(function(err) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(book);
    }
    mongoose.disconnect();
  });
});

module.exports = router;