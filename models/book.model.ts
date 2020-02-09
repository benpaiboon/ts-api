import * as mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String
  },
  summary: {
    type: String
  },
  ISBN: {
    type: String
  },
  genre: {
    type: String
  },
  url: {
    stress: String
  },
})

const Book = mongoose.model('book', bookSchema, 'books');

export default Book;
