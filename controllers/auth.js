var User = require('../models/user.js')
var jwt = require('jsonwebtoken');

module.exports = function(app) {

    app.get('/signup', function(req, res){
      res.render('signup');
    });

    app.post('/signup', function(req, res){
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
            // console.log(req.data.token)
            res.send({ token: token })
        });
    });

    app.get('/login', function(req, res){
      res.render('login');
    });

    app.post('/login', function(req, res){
        User.findOne({email: req.body.email}, function(err, user){
            if (err){ return res.status(300) };
            if (!user) {
                res.send({ success: false, message: 'Authentication failed. User not found.' });
            }
            else {
                user.comparePassword(req.body.password, function(err, isMatch) {
                if (isMatch && !err) {
                  // Create token if the password matched and no error was thrown
                  var token = jwt.sign({ _id: user._id }, 'shhhhhhared-secret');
                  res.send({ token: token })
                } else {
                  res.send({ success: false, message: 'Authentication failed. Passwords did not match.' });
                }
              });
        });

    });
};


//Send email
