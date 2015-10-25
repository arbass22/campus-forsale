var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = express.Router();

var Item = require('./../database/models/item');
console.log("got into item handler");

router.get('/:id', function(req, res) {
  mongoose.connect('mongodb://localhost/campusforsale');

  Item.findById(req.params.id, function(err, obj) {
    if (err) {
      res.status(404);
      res.send(err.message());
    }
    else {
      res.json(obj);
    }
    mongoose.disconnect();
  });
});

router.post('/', function(req, res) {
  mongoose.connect('mongodb://localhost/campusforsale');

  var item = new Item(req.body);
  item.save(function(err) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(item);
    }
    mongoose.disconnect();
  });
});

router.delete('/:id', function(req, res) {
  mongoose.connect('mongodb://localhost/campusforsale');
  Item.findByIdAndRemove(req.params.id, function(err, obj) {
    if (err || obj == null) {
      res.send(false);
    }
    else {
      res.send(true);
    }
  mongoose.disconnect();
  });
});

router.put('/:id', function(req, res) {
  mongoose.connect('mongodb://localhost/campusforsale');

  Item.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, obj) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(obj);
    }
    mongoose.disconnect();
  });
});

module.exports = router;
