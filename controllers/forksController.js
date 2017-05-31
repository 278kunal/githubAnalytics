var forksController = function (githubService) {
    var getData = function (req, res) {
        githubService.getForks(req.params.lang,function (err, results) {
            res.render('forks', {
                title: ' | Forks',
                lang : req.params.lang.toUpperCase(),
                item: results.items
            })
        })
    }

    var getJSON = function (req, res) {
        githubService.getForks(req.params.lang,function (err, results) {
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

module.exports = forksController;