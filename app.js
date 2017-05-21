var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var search = require('./routes/search');
var stars = require('./routes/stars');

var app = express();

var port =  process.env.PORT || 3000;
// view engine setup
app.set('views', './views');
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));

app.use('/', index);
app.use('/users', users);
app.use('/search', search);
app.use('/stars',stars);

app.listen(port, function (err) {
    console.log('Running server on port ' + port);
});

