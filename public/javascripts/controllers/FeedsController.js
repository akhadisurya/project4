var Feed = require('../models/feed');

module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy
}

function index(req, res, next) {
  Feed.find({}, function(err, feeds) {
    if (err) next(err);

    res.json(feeds);
  });
}

function show(req, res, next) {
  var id = req.params.id;

  Feed.findById(id, function(err, feed) {
    if (err) next(err);

    res.json(feed);
  });
}

function create(req, res, next) {
  var newFeed = new Feed(req.body);

  newFeed.save(function(err, savedFeed) {
    if (err) next(err);

    res.json(savedFeed);
  });

}

function update(req, res, next) {
  var id = req.params.id;

  Feed.findById(id, function(err, feed) {
    if (err) next(err);

    feed.title = req.body.title;
    feed.body = req.body.body;
    feed.author = req.body.author;
    feed.author = req.body.author;
    feed.thumbnail = req.body.thumbnail;
    feed.updated = req.body.updated;

    feed.save(function(err, updatedFeed) {
      if (err) next(err);

      res.json(updatedFeed);
    });

  });
}

function destroy(req, res, next) {
  var id = req.params.id;
  Feed.remove({_id:id}, function(err) {
    if (err) next(err);

    res.json({message: 'Feed successfully deleted'});
  });
}
