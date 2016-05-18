var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var feedSchema = new mongoose.Schema({
  ofObjectId: [Schema.Types.ObjectId],
  title: {type: String, required: "true"},
  body: {type: String, required: "true"},
  link: String,
  score: {type: Number, min: 1, max: 100, default: 0},
  author: {type: String, required: "true"},
  thumbnail: {type: String, required: "true"},
  created: {type: Date, default: Date.now}
  updated: {type: Date, default: Date.now}
});


var User = mongoose.model('User', userSchema);

module.exports = User;

