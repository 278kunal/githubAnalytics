var trendingController = function (githubService) {
    var getData = function (req, res) {
        var year = req.params.year;
        githubService.getTrending(year, function (err, results) {
            res.render('trending', {
                title: ' | Trending',
                year: year,
                item: results.items
            });
        });
    }

    var getJSON = function (req, res) {
        githubService.getStars(function (err, results) {
            res.json({
                data: results.items
            });
        })
    }

    return {
        getData: getData,
        getJSON: getJSON
    }
}

module.exports = trendingController;