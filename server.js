// var express = require('express');
// var app = express();
//
// var http = require('http');
// var server = http.createServer(function(request, response){
//     console.log("got a request");
//     response.write("hello");
//     response.end();
// });
//
// server.listen('3000');

var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.listen(3000);
