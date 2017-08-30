var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongojs = require('mongojs');

var index = require('./routes/index');
var todos = require('./routes/todos');


var app = express();
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
//app.use(__dirname, 'views');

app.use(function (req, res, next) {
    
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');
    
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
    
        // Pass to next layer of middleware
        next();
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : false
}));

app.use('/', index);
app.use('/api/v1/', todos);

app.listen(3333, function() {
    console.log('Server is listening on 3333 port');
})

