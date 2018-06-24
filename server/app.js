const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
// const logger  = require('./middleware/logger');

var app = express();

// Logger for requests
// app.use(logger);

// Body Parser Middleware for Parsing JSON requests
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

// Static file Path
app.use(express.static(path.join(__dirname, 'client/public')));

app.get('/', function(req, res){
    res.send('Hello world');
});

app.get('/api/getTestData', function(req, res){
    res.json({ test: "someDataistested" });
});

app.listen('5000', function() {
    console.log('Server started on port 5000');
});
