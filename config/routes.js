var express = require('express'),
    router = express.Router();

var feedsController = require('../controllers/feeds');
var usersController = require('../controllers/user');

// Require token authentication.
var token = require('../config/token_auth');

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

router.route('/api/users/me')
  .get(token.authenticate, usersController.me);

router.route('/api/token')
  .post(token.create);

// POST /api/users
router.post('/api/users', usersController.create);

// GET /api/feeds
router.get('/api/feeds', feedsController.getAll);

// POST /api/feeds
router.post('/api/feeds', feedsController.createFeed);

// Show /api/feeds/:id
router.get('/api/feeds/:id', feedsController.getFeed);

// update /api/feeds/:id
router.patch('/api/feeds/:id', feedsController.updateFeed);

// DELETE /api/feeds/:id
router.delete('/api/feeds/:id', feedsController.removeFeed);

module.exports = router
