var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
  name: String,
  owner: String,
  category: String,
  description: String,
  price: String,
  condition: String,
  available: Boolean,
  pictures: [String]
});
var Item = mongoose.model('Item', itemSchema);
module.exports = Item;
