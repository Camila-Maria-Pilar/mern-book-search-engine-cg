const { Schema } = require('mongoose');


const bookSchema = new Schema({
  authors: [
    {
      type: String,
      default: 'Unknown Author'
    },
  ],
  description: {
    type: String,
    required: true,
  },
  bookId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: 'No Image Available'
  },
  link: {
    type: String,
    default: 'No Link Available'
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = bookSchema;
