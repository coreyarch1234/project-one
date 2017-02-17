exports.authGet = function(req, res){
  res.render('signup');
};

exports.authPost = function(req, res){
    //  var user = {
    //     Name: req.body.name,
    //     Email: req.body.email,
    //     Pass: req.body.pass,
    //     Num: req.body.num
    // };
    console.log(req.body)
    // res.send(req.body)
};
