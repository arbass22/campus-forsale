var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
  description: String,
  title: String,
  owner: String,
  author: String,
  edition: Number,
  isbn: Number,
  category: String,
  price: Number,
  condition: String,
  available: Boolean,
  pictures: [String],
  views: Number
});

itemSchema.index({title:'text'});
var Item = mongoose.model('Item', itemSchema);
module.exports = Item;
