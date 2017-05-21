var express = require('express');
var searchRouter = express.Router();
var githubService = require('../services/githubService')();
var searchController = require('../controllers/searchController')(githubService);

searchRouter.route('/')
    .post(searchController.getData);

module.exports = searchRouter;