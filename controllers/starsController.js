var starsController = function(githubService){
        var getData = function(req,res){
            githubService.getStars(function(err,results){
                console.log(results.items);
                res.render('stars',{title: 'Stars', item: results.items });
            })
        }

        return {
            getData : getData
        }
}

module.exports = starsController