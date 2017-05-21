var express = require('express');
var starsRouter = express.Router();
var githubService = require('../services/githubService')();
var starsController = require('../controllers/starsController')(githubService);

starsRouter.route('/')
    .get(starsController.getData);

starsRouter.route('/data.json')
    .get(starsController.getJSON);

module.exports = starsRouter;