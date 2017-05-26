var githubService = function () {
    var GitHubClient = require('../libs/GitHubClient').GitHubClient;

    var githubCliDotCom = new GitHubClient({
        baseUri: "https://api.github.com",
        token: ""
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

    var getStars = function (language,cb) {
        var searchString = "q=stars:>1+language:"+language+"&type=Repositories";

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

        var searchString = "q=forks%3A%3E1&sort=forks&type=Repositories";

        githubCliDotCom.getData({
                path: `/search/repositories?${searchString}`
            })
            .then(response => {
                cb(null, response.data);
            }, err => {
                console.log(err);
            });
    }

    var getDateRange = function (year) {

        var date = new Date();
        var currYear = date.getFullYear()
        var year = parseInt(year);
        var currDate, initalDate, month, finalDate, getM;
        if (currYear === year) {
            getM = date.getMonth();
            month = getM + 1;
            if (getM < 10) {
                month = "0" + month.toString();
            }
            currDate = date.getFullYear().toString() + "-" + month + "-" + date.getDate().toString();
            initialDate = date.getFullYear().toString() + "-01-01";
            return initialDate + ".." + currDate;
        } else {
            initialDate = year.toString() + "-01-01";
            finalDate = year.toString() + "-12-31";
            return initialDate + ".." + finalDate;
        }
    }

    var getTrending = function (year, cb) {

        var dateRange = getDateRange(year);

        var searchString = "q=created%3A" + dateRange + "&type=Repositories&stars:>1&sort=s";

        githubCliDotCom.getData({
                path: `/search/repositories?${searchString}`
            })
            .then(response => {
                cb(null, response.data);
            }, err => {
                console.log(err);
            })
    }

    return {
        getJSONData: getJSONData,
        getStars: getStars,
        getForks: getForks,
        getTrending: getTrending
    };
};

module.exports = githubService;