var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = express.Router();

var Item = require('./../database/models/item');

router.get('/', function(req, res) {
  mongoose.connect('mongodb://localhost:27017/campusforsale');

  console.log("entered search endpoint");
  var query = Item.find({});
  console.log("created intial query");
  if (req.query.keywords) {
    console.log("there are keywords");
    query = query.find({
      $text : {$search : req.query.keywords},
    });
  }
  if(req.query.category) {
    console.log("there are category");
    query = query.where('category').equals(req.query.category);
  }
  query.exec(function(err, items) {
    if (err) {
      res.json(err);
    } else {
      res.json(items);
    }
    mongoose.disconnect();
  });
});



module.exports = router;
