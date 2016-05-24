var express = require('express'),
    router = express.Router();

var feedsController = require('../controllers/feeds');
var usersController = require('../controllers/user');

// Require token authentication.
var token = require('../config/token_auth');

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
