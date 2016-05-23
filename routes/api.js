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

// update /api/feeds/:id
router.patch('/feeds/:id', feedsCtrl.updateFeed);

// DELETE /api/feeds/:id
router.delete('/feeds/:id', feedsCtrl.removeFeed);


module.exports = router;
