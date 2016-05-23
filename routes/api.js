var router = require('express').Router();
var feedsCtrl = require('../controllers/feeds');
var usersCtrl = require('../controllers/user');
var express = require('express');

// GET /api/feeds
router.get('/feeds', feedsCtrl.getAll);

// POST /api/feeds
router.post('/feeds', feedsCtrl.createFeed);

// Show /api/feeds/:id
router.get('/feeds/:id', feedsCtrl.getFeed);

// DELETE /api/feeds/:id
router.delete('/feeds/:id', feedsCtrl.removeFeed);


module.exports = router;
