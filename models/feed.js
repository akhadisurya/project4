var mongoose = require('mongoose');


var feedSchema = new mongoose.Schema({
  title: {type: String, required: "true"},
  body: {type: String, required: "true"},
  score: {type: Number, min: 1, max: 100, default: 0},
  author: {type: String, required: "true"},
  thumbnail: {type: String, required: "true"},
  created: {type: Date, default: Date.now},
  updated: {type: Date, default: Date.now}
});


var Feed = mongoose.model('Feed', feedSchema);

module.exports = Feed;

