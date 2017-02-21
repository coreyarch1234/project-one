var Post = require("../models/post.js");

module.exports = function(app) {
    //Posts show
    app.get('/posts/:id', function(req, res){
        Post.findById(req.params.id).populate('comments').exec(function(err, post){
            res.render('posts-show', {post: post});
        });
    });
};
