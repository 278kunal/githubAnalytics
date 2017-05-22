// Get data to be populated into the charts
var getChartData = function(cb) {
    $.getJSON("forks/data.json", function (result) {
        // Do whatever what you want with this data
        var i;
        var chartData = [];
        for(i = 0; i<result.data.length;i++){
            var coordinates = [result.data[i].name,result.data[i].forks_count];
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
    data.addColumn('number', 'Forks');
    data.addRows(chartData);

    // Set chart options
    var options = {
        'title': 'Fork rating of repositories',
        'width': 1024,
        'height': 800,
        hAxis: {
          title: 'Repositories'
          },
        vAxis: {
          title : 'Forks'
        }
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById('plot'));
    chart.draw(data, options);
}

getChartData(drawChart);