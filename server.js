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

//MIDDLEWARE
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

//Root route
app.get('/', function (req, res) {
    res.render('home');
});

//Posts route//INDEX
app.get('/posts', function(req, res){
    var posts = [
        {body:'This is my first post.'},
        {body:'This is my second post'},
        {body:'This is my third post'}
    ];
    // res.json(posts);
    res.render('posts-index', {posts: posts});
});



//DEPLOY
app.listen(process.env.PORT || 3000, function(){

});
