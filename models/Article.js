const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'The article needs a title'],
  },
  author: {
    type: String,
    required: [true],
  },
  articleBody: {
    type: String,
    minlength: 4,
    required: [true, 'Cannot post an empty article'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;