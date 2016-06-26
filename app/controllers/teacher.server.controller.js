var Teacher = require('mongoose').model('Teacher');

exports.create = function(req,res,next){
  var teacher = new Teacher(req.body);

  teacher.save(function(err){
    if(err){
      return next(err);
    }else{
      res.json(teacher);
    }
  });
};
