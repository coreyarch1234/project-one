
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
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/test');

var Comment = require("./models/comment.js"); //Allows use to use the Comment model here
var Post = require("./models/post.js");

//User authentication
var userAuth = require("./controllers/auth.js");

// app.get('/signup', function (req, res) {
//     res.render('signup');
// });
//
//
// app.post('/signup', function(req, res){
//    //  var user = {
//    //     Name: req.body.name,
//    //     Email: req.body.email,
//    //     Pass: req.body.pass,
//    //     Num: req.body.num
//    // };
//    console.log(req.body)
//    // res.send(req.body)
//
// });

app.get('/signup', userAuth.authGet);


app.post('/signup', userAuth.authPost);

//Index route
app.get('/', function (req, res) {
    Post.find().exec(function(err, posts){
        res.render('home', {posts: posts});
    });
});

//Posts show
app.get('/posts/:id', function(req, res){
    Post.findById(req.params.id).populate('comments').exec(function(err, post){
        res.render('posts-show', {post: post});
    });
});

//Posts Create route. Post posts. Save to database.
app.post('/posts', function(req, res){
    var post = req.body;
    Post.create(post, function(err, post){
        if (err){ return res.status(300) };
        res.status(200).json(post);
    });

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

app.post('/comments', function (req, res) {
    Post.findById(req.body.post).exec(function (err, post) {
        var comment = req.body;
        Comment.create(comment, function(err, comment){
            if (err){ return res.status(300) };
            post.comments.push(comment);
            post.save(function (err) {
                if (err){ return res.status(300) };
                console.log(post.comments);
                res.status(200).json(comment);
            });
        });
    });
});

//DEPLOY
app.listen(process.env.PORT || 3000, function(){

});
