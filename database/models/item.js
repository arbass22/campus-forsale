var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
  title: String,
  owner: String,
  category: String,
  description: String,
  price: Number,
  condition: String,
  available: Boolean,
  pictures: [String]
});
var Item = mongoose.model('Item', itemSchema);
module.exports = Item;
