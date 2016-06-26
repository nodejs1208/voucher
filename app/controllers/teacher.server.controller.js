var Teacher = require('mongoose').model('Teacher');

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
