
//Express Set
var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();
var bodyParser = require('body-parser');
//Allows you to use req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//MIDDLEWARE
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));


// getting-started.js Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Post = require("./models/post.js");

//Root route
app.get('/', function (req, res) {
    Post.find().exec(function(err, posts){
        res.render('home', {posts: posts});
    });
});

//Posts show
app.get('/posts/:id', function(req, res){
    Post.findById(req.params.id).exec(function(err, post){
        res.render('post-show', {post: post});
    });
});

//Posts route. Post posts. Save to database.
app.post('/posts', function(req, res){
    var post = req.body;
    Post.create(post, function(err, post){
        if (err){ return res.status(300) };
        res.status(200).json(post);
    });

    // Post.findOne({ 'body': 'Hello World' }, function (err, person) {
    //   if (err) return handleError(err);
    // //   console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation) // Space Ghost is a talk show host.
    // })

    // res.json(posts);
    // res.render('posts-index', {posts: posts});
});




//DEPLOY
app.listen(process.env.PORT || 3000, function(){

});
