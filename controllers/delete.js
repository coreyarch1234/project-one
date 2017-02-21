var Post = require("../models/post.js");

module.exports = function(app) {
    //Posts delete
    app.delete('/posts/:id', function(req, res){
        Post.findById(req.params.id).exec(function(err, post){
            post.remove();
            res.status(200).json({});
        });
    });
};
