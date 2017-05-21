var express = require('express');
var trendingRouter = express.Router();
var githubServices = require('../services/githubService')();
var trendingController = require('../controllers/trendingController')(githubServices);

trendingRouter.route('/year/:year')
        .get(trendingController.getData);

trendingRouter.route('/year/:year/data.json')
        .get(trendingController.getJSON);

module.exports = trendingRouter;