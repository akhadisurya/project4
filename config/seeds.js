var mongoose = require('./database');

var Feed = require('../models/Feed');

var feeds = [

];

Feed.remove({}, function(err) {
  if (err) console.log(err);
  Feed.create(users, function(err, feeds) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + feeds.length  + " feeds.");
      mongoose.connection.close();
    }
    process.exit();
  });
});
