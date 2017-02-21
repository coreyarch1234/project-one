
var User = require('./models/user.js')

module.exports = function(app) {

    app.get('/signup', function(req, res){
      res.render('signup');
    };

    app.post('/signup', function(req, res){
        //  var user = {
        //     Name: req.body.name,
        //     Email: req.body.email,
        //     Pass: req.body.pass,
        //     Num: req.body.num
        // };
        console.log(req.body)
        // res.send(req.body)
    };
}


//Send email
