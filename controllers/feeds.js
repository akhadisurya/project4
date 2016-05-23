var Feed = require('../models/feed');

// GET
function getAll(request, response) {
  Feed.find(function(error, feeds) {
    if(error) response.json({message: 'Could not find any feeds'});
    response.json(feeds);
  }).select('-__v');
}

// POST
function createFeed(request, response) {
  console.log('in POST');
  console.log('body:',request.body);

  var feed = new Feed(request.body);

  feed.save(function(error) {
    if(error) response.json({messsage: 'Could not ceate feed b/c:' + error});

    response.json({feed: feed});
  });
}

// GET
function getFeed(request, response) {
  var id = request.params.id;

  Feed.findById({_id: id}, function(error, feed) {
    if(error) response.json({message: 'Could not find feed b/c:' + error});

    response.json({feed: feed});
  }).select('-__v');
}

function updateFeed(request, response) {
  var id = request.params.id;

  Feed.findById({_id: id}, function(error, feed) {
    if(error) response.json({message: 'Could not find feeds b/c:' + error});

    if(request.body.title) feed.title = request.body.title;
    if(request.body.body) feed.body = request.body.body;
    if(request.body.updated) feed.updated = request.body.updated;

    feed.save(function(error) {
      if(error) response.json({messsage: 'Could not update feed b/c:' + error});

      response.json({message: 'Feed successfully updated', feed: feed});
    });
  }).select('-__v');
}

function removeFeed(request, response) {
  var id = request.params.id;

  Feed.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete feed b/c:' + error});

    response.json({message: 'Feed successfully deleted'});
  }).select('-__v');
}

module.exports = {
  getAll: getAll,
  createFeed: createFeed,
  getFeed: getFeed,
  updateFeed: updateFeed,
  removeFeed: removeFeed
}
