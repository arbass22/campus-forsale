var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = express.Router();

var Book = require('./../database/models/book');
mongoose.connect('mongodb://localhost/books');
console.log("got into book handler");

router.get('/:id', function(req, res) {
  console.log('called get method');
  Book.findById(req.params.id, function(err, obj) {
    if (err)
      res.json(err);
    else
      res.json(obj);
  });
});

router.post('/', function(req, res) {
  console.log("Called the post method");
  var book = new Book(req.body);
  book.save(function(err) {
    if (err)
      res.json(err);
    else
      res.json(book);
  });
});

module.exports = router;
