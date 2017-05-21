var express = require('express');
var forksRouter = express.Router();
var githubService = require('../services/githubService')();
var forksController = require('../controllers/forksController')(githubService);

forksRouter.route('/')
        .get(forksController.getData);

forksRouter.route('/data.json')
        .get(forksController.getJSON);

module.exports = forksRouter;