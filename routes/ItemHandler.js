var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = express.Router();

var Item = require('./../database/models/item');
console.log("got into item handler");

router.get('/:id', function(req, res) {
  mongoose.connect('mongodb://localhost/items');

  Item.findById(req.params.id, function(err, obj) {
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
  mongoose.connect('mongodb://localhost/items');

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

module.exports = router;
