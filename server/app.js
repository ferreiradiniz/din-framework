/*jshint node:true*/
'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var compress = require('compression');
var cors = require('cors');
// var errorHandler = require('./routes/utils/errorHandler')();
var favicon = require('serve-favicon');
// var logger = require('morgan');
var port = process.env.PORT || 7203;
var routes;

var environment = process.env.NODE_ENV;

app.use(favicon(__dirname + '/favicon.ico'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(compress());
// app.use(logger('dev'));
app.use(cors());
// app.use(errorHandler.init);

// routes = require('./routes/index')(app);

console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

app.get('/ping', function(req, res, next) {
    console.log(req.body);
    res.send('pong');
});

switch (environment) {
    case 'build':
        console.log('** BUILD **');
        app.use(express.static('./build/'));
        app.use('/*', express.static('./build/index.html'));
        break;
    default:
        console.log('** DEV **');
        app.use('/libs', express.static('../bower_components'));
        app.use('/scripts', express.static('../ext-modules'));
        app.use('/templates', express.static(__dirname + '/*.html'));

        app.use(express.static('../app'));

        // app.use(express.static('./'));
        // app.use(express.static('../ext-modules/**/'));
        app.use('/*', express.static('../app/index.html'));
        break;
}

app.listen(port, function() {
    console.log('Express server listening on port ' + port);
    console.log('env = ' + app.get('env') +
        '\n__dirname = ' + __dirname +
        '\nprocess.cwd = ' + process.cwd());

});
