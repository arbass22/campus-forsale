var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = express.Router();

var Item = require('./../database/models/item');

router.get('/', function(req, res) {
  mongoose.connect('mongodb://localhost:27017/campusforsale');

  var query = Item.find({});
  if (req.query.keywords) {
    query = query.find({
      $text : {$search : req.query.keywords},
    });
  }
  if(req.query.category) {
    query = query.where('category').equals(req.query.category);
  }
  query.exec(function(err, items) {
    if (err) {
      res.status(400);
      res.send(err.message);
    } else {
      res.json(items);
    }
    mongoose.disconnect();
  });
});



module.exports = router;
