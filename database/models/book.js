var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
  title: String,
  author: String,
  edition: Number,
  isbn: Number,
  description: String,
  owner: String,
  pictures: [String],
  price: Number,
  condition: String,
  available: Boolean
});

var Book = mongoose.model('Book', bookSchema);
module.exports = Book;
