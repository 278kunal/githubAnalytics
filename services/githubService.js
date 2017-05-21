var githubService = function () {
    var GitHubClient = require('../libs/GitHubClient').GitHubClient;

    var githubCliDotCom = new GitHubClient({
        baseUri: "https://api.github.com",
        token: "319bc8b9b39f11abc9718c1b8263f93b8164ff14"
    });

    var getJSONData = function (technology, queryString, cb) {

        var searchString = "q=" + queryString + "language:" + technology;

        githubCliDotCom.getData({
                path: `/search/repositories?${searchString}`
            })
            .then(response => {
                cb(null, response.data);
            });

    }

    var getStars = function (cb) {

        var searchString = "q=stars:>1&s=stars&type=Repositories";

        githubCliDotCom.getData({
                path: `/search/repositories?${searchString}`
            })
            .then(response => {
                cb(null, response.data);
            }, err => {
                console.log(err);
            });
    }

    var getForks = function (cb) {

        var searchString = "q=forks%3A%3E1&sort=forks&type=Repositories"

        githubCliDotCom.getData({
                path: `/search/repositories?${searchString}`
            })
            .then(response => {
                cb(null, response.data);
            }, err => {
                console.log(err)
            });
    }

    return {
        getJSONData: getJSONData,
        getStars: getStars,
        getForks: getForks
    };
};

module.exports = githubService;