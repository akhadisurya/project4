var Feed = require('../models/feed');
var User = require("../models/user");

// GET
function getAll(request, response) {
  var populateQuery = [{path:"postedBy", select:"name"}]
  Feed.find({}, function(error, feeds) {
    if(error) response.json({message: 'Could not find any feeds'});
    User.find({}, function(error, users){
      if(error) response.json(error)
        var names = {};
        users.forEach(function(user){
          names[user._id] = user.name
        })
    response.json({feeds: feeds, names: names});
    })
  }).select('-__v');
}

// POST
function createFeed(request, response) {
  console.log('in POST');
  console.log('body:',request.body);

  var feed = new Feed(request.body);

  // fill in this line
  feed.postedBy = request.decoded._id
  console.log(request.decoded)

  feed.save(function(error) {
    if(error) {
      response.json({messsage: 'Could not ceate feed b/c:' + error});
    } else {
      response.json({feed: feed});
    }
  });
}

// GET
function getFeed(request, response) {
  var id = request.params.id;

  Feed.findById(id, function(error, feed) {
    if(error) {
      response.json({message: 'Could not find feed b/c:' + error});
    } else {
      response.json(feed);
    }
  }).select('-__v');
}

function updateFeed(request, response) {
  var id = request.params.id;

  Feed.findById(id, function(error, feed) {
    if(error) response.json({message: 'Could not find feeds b/c:' + error});

    if(request.body.title) feed.title = request.body.title;
    if(request.body.body) feed.body = request.body.body;
    if(request.body.author) feed.author = request.body.author;

    feed.save(function(error, updatedFeed) {
      if(error) response.json({messsage: 'Could not update feed b/c:' + error});

      response.json(updatedFeed);
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
