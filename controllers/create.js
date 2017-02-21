var Post = require("../models/post.js");

module.exports = function(app) {
    //Posts Create route. Post posts. Save to database.
    app.post('/posts', function(req, res){
        var post = req.body;
        Post.create(post, function(err, post){
            if (err){ return res.status(300) };
            res.status(200).json(post);
        });

    });
};
