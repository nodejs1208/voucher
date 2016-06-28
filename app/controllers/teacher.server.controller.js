var Teacher = require('mongoose').model('Teacher');
var passport =require('passport');

var getErrorMessage = function(err){
var message = '';


  if(err.code){

    switch(err.code){
      case 11000:
      case 11001:

        message = 'Username already exists';
        break;
        default:
        message = 'Somgting went wrong';
    }
  }else{
    for(var errName in err.errors){
      if(err.errors[errName].message) message =err.errors[errName].
      message;

    }
  }
  return message;
};

exports.renderSignin = function(req,res,next){

if(!req.teacher){
  res.render('signin',{
    messages: req.flash('error') || req.flash('info')
  });

}else{
  return res.redirect('/');
}

};

exports.renderSignup =function(req,res,next){

  if(!req.teacher){

    res.render('signup',{
      messages: req.flash('error')
    });
  }else{

    return res.redirect('/asdf');
  }
};


exports.signup = function(req,res,next) {

if(!  req.teacher){
  var teacher = new Teacher(req.body);
  var message =null;

  teacher.provider = 'local';


  teacher.save(function(err){
    if(err){
      var message = getErrorMessage(err);

      req.flash('error',message);
      return res.redirect('/signup');
    }
    req.login(teacher, function(err){
      if(err) return next(err);
      return res.redirect('/');
    });

});
}else{
  return res.redirect('/');

     }
};

exports.signout = function(req,res){
  req.logout();
  res.redirect('/');
};






exports.create = function(req, res, next) {
    var teacher = new Teacher(req.body);

    teacher.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(teacher);
        }
    });
};

exports.list = function(req, res, next) {
    Teacher.find({}, function(err, teacher) {

        if (err) {
            return next(err);
        } else {
            res.json(teacher);
        }
    });
};

exports.read = function(req, res) {
    res.json(req.teacher);
};

exports.teacherByID = function(req, res, next, id) {

    Teacher.findOne({
        _id: id
    }, function(err, teacher) {
        if (err) {
            return next(err);
        } else {
            req.teacher = teacher;
            next();
        }
    });
};

exports.update = function(req, res, next) {
    Teacher.findByIdAndUpdate(req.teacher.id, req.body, function(err, teacher) {
        if (err) {
            return next(err);
        } else {
            res.json(teacher);
        }
    });
};

exports.delete=function (req,res,next) {
  req.teacher.remove(function(err){
    if(err){
      return next(err);
    }else{
      res.json(req.teacher);
    }
  });
};
