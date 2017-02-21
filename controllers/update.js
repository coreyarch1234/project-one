var Post = require("../models/post.js");

module.exports = function(app) {
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
};
