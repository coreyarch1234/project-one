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

//Express Set
var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();

//MIDDLEWARE
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));


// getting-started.js Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Post = require("../models/post.js");

//Root route
app.get('/', function (req, res) {
    res.render('home');
});

//Posts route//INDEX
app.get('/posts', function(req, res){
    // var posts = [
    //     {body:'This is my first post.'},
    //     {body:'This is my second post'},
    //     {body:'This is my third post'}
    // ];

    Post.findOne({ 'body': 'Hello World' }, 'name occupation', function (err, person) {
      if (err) return handleError(err);
      console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation) // Space Ghost is a talk show host.
    })

    // res.json(posts);
    res.render('posts-index', {posts: posts});
});



//DEPLOY
app.listen(process.env.PORT || 3000, function(){

});
