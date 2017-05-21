var githubService = function () {
    var GitHubClient = require('../libs/GitHubClient').GitHubClient;

    var githubCliDotCom = new GitHubClient({
        baseUri: "https://api.github.com",
        token: "842bfa7494db1523b6aa81295e4ef2c5928c61a5"
    });

    var getJSONData = function (technology, queryString, cb) {

        var searchString = "q="+queryString+"language:"+technology;
        
        githubCliDotCom.getData({
                path: `/search/repositories?${searchString}`
            })
            .then(response => {
                cb(null, response.data);
            });
        
    }

    var getStars = function(cb){

        var searchString = "q=stars:>1&s=stars&type=Repositories";

        githubCliDotCom.getData({
                path: `/search/repositories?${searchString}`
        })
        .then(response => {
            cb(null, response.data);
        });
    }

    return {
        getJSONData: getJSONData,
        getStars: getStars 
    };
};

module.exports = githubService;