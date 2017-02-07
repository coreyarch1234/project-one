
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

//Index route
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

//Posts Create route. Post posts. Save to database.
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

//Posts delete
app.delete('/posts/:id', function(req, res){
    Post.findById(req.params.id).exec(function(err, post){
        post.remove();
        res.status(200).json({});
    });
});

//Display the edit form
app.get('/posts/:id/edit', function(req, res){
    Post.findById(req.params.id).exec(function(err, post){
        res.render('posts-edit', {post: post});
    });
})

//Posts Update
app.put('/posts/:id', function(req, res){
    console.log(req.params.id)
    Post.findById(req.params.id).exec(function(err, post){
        if (err){ return res.status(300) };
        post.body = req.body.body;
        // save the post
        post.save(function(err, post) {
            if (err) { return res.send(err) };
            res.send(post);
        });
    });
});





//DEPLOY
app.listen(process.env.PORT || 3000, function(){

});
