var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
  title: String,
  owner: String,
  author: String,
  edition: Number,
  isbn: Number,
  category: String,
  description: String,
  price: Number,
  condition: String,
  available: Boolean,
  pictures: [String],
  views: Number
});
itemSchema.index({title: 'text', description: 'text', author: 'text', isbn: 'number'});

var Item = mongoose.model('Item', itemSchema);
module.exports = Item;
