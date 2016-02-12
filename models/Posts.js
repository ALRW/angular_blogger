var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  title: String,
  description: String,
  username: String,
  content: String
});

mongoose.model('Post', PostSchema);
