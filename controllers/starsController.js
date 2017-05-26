var starsController = function (githubService) {
    var getData = function (req, res) {
        githubService.getStars(req.params.lang,function (err, results) {
            res.render('stars', {
                title: ' | Stars',
                item: results.items
            });
        })
    }

    var getJSON = function (req, res) {
        githubService.getStars(req.params.lang,function (err, results) {
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

module.exports = starsController