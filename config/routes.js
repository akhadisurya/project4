var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

var feedsController = require('../controllers/feeds');

// http://127.0.0.1:3000/feeds
router.route('/feeds')

  //GET all feeds
  .get(feedsController.getAll)

  //POST a new blob
  .post(feedsController.createFeed);


router.route('/feeds/:id')

  // GET return specific feed
  .get(feedsController.getFeed)

  // PATCH update existing feed
  .patch(feedsController.updateFeed)

  // DELETE remove specific feed from DB
  .delete(feedsController.removeFeed);


module.exports = router
