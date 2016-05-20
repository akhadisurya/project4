// load the env vars
require('dotenv').load();

var mongoose = require('./database');

var Feed = require('../models/Feed');

var feeds = [{
  title: "Harry Potter",
  body: "Harry Potter is a pothead",
  score: 10,
  author: "Arvin",
  thumbnail: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSFqma8KKJsvHdpNJE9rZh4p6SxjVGefgxkq5e06JLphk0Xcp_KXA",
  created: new Date(),
  updated: new Date()
  }
];

Feed.remove({}, function(err) {
  if (err) console.log(err);
  Feed.create(feeds, function(err, feeds) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + feeds.length  + " feeds.");
      mongoose.connection.close();
    }
    process.exit();
  });
});
