var searchController = function (githubService) {
    var getData = function (req, res) {
        githubService.getJSONData(req.body.technology, req.body.queryString,
            function (err, result) {
                res.json(result);
            })
    }

    var getDataByID = function () {

    }
    return {
        getData: getData,
        getDataByID: getDataByID
    }
}

module.exports = searchController;