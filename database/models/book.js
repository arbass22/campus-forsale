var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
  title: String,
  author: String,
  edition: Number,
  isbn: Number,
  owner: String,
  price: String,
  condition: String,
  available: Boolean
});

var Book = mongoose.model('Book', bookSchema);
module.exports = Book;
