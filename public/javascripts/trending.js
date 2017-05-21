// Get data to be populated into the charts
var getChartData = function(year,cb) {
    $.getJSON(year+"/data.json", function (result) {
        // Do whatever what you want with this data
        var i;
        var chartData = [];
        for(i = 0; i<result.data.length;i++){
            var coordinates = [result.data[i].name,result.data[i].stargazers_count];
            chartData.push(coordinates);
        }
        cb(chartData);
    });
}

// Load the Visualization API and the corechart package.
google.charts.load('current', {
    'packages': ['corechart']
});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
var drawChart = function (chartData) {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Repositories');
    data.addColumn('number', 'Stars');
    data.addRows(chartData);

    // Set chart options
    var options = {
        'title': 'Star rating of repositories',
        'width': 1024,
        'height': 800
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById('plot'));
    chart.draw(data, options);
}
var yearBtn = document.getElementsByClassName('btn-year');
var _self = this;
for(var i=0; i<yearBtn.length;i++){
    yearBtn[i].addEventListener('click',_self.getChartData(yearBtn[i].innerText,drawChart))
}