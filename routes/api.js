var router = require('express').Router();
var feedsCtrl = require('../controllers/feeds');
var usersCtrl = require('../controllers/users');

// GET /api/feeds
router.get('/feeds', feedsCtrl.index);

// POST /api/feeds
router.post('/feeds', feedsCtrl.create);

// DELETE /api/feeds/:id
router.delete('/feeds/:id', feedsCtrl.delete);


module.exports = router;
