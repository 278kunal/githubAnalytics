var trendingController = function (githubService) {
    var getData = function (req, res) {
        var year = req.params.year,
            lang = req.params.lang;
        githubService.getTrending(year, lang, function (err, results) {
            res.render('trending', {
                title: ' | Trending',
                lang : req.params.lang.toUpperCase(),
                year: year,
                item: results.items
            });
        });
    }

    var getJSON = function (req, res) {
        var year = req.params.year,
            lang = req.params.lang;
        githubService.getTrending(year, lang, function (err, results) {
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