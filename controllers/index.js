
var Post = require("../models/post.js");

module.exports = function(app) {
    //Index route
    app.get('/', function (req, res) {
        Post.find().exec(function(err, posts){
            res.render('home', {posts: posts});
        });
    });

    // CONTACT US

    // ABOUT US
};
