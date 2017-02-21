
var User = require('../models/user.js')
var jwt = require('jsonwebtoken');

module.exports = function(app) {

    app.get('/signup', function(req, res){
      res.render('signup');
    });

    app.post('/signup', function(req, res){
        //  var user = {
        //     First: req.body.first,
        //     Last: req.body.last,
        //     Email: req.body.email,
        //     Password: req.body.password,
        // };
        console.log(req.body)
        var user = new User();
        user.first = req.body.first;
        user.last = req.body.last;
        user.email = req.body.email;
        user.password = req.body.password;
        user.save(function(err){
            if (err){ return res.status(300) };
            var token = jwt.sign({ _id: user._id }, 'shhhhhhared-secret');
            console.log("hi")
            console.log(token)




        });
        // res.send(req.body)
    });

    app.get('/login', function(req, res){
      res.render('login');
    });
};


//Send email
