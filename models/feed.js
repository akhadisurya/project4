var mongoose = require('mongoose');


var feedSchema = new mongoose.Schema({
  title: {type: String, required: "true"},
  body: {type: String, required: "true"},
  score: {type: Number, min: 1, max: 100, default: 1},
  author: {type: String, required: "true"},
  thumbnail: {type: String},
  created: {type: Date, default: new Date()},
  updated: {type: Date, default: new Date()}
});


var Feed = mongoose.model('Feed', feedSchema);

module.exports = Feed;

