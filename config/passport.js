var passport =require('passport');
var mongoose = require('mongoose');

module.exports = function(){

  var Teacher = mongoose.model('Teacher');

  passport.serializeUser(function(teacher_id,done){

      done(null,teacher_id.id);
  });

  passport.deserializeUser(function(id,done){
    Teacher.findOne({
        _id:id
    },'-password -salt',function(err,user){

      done(err,user);
    });
  });

  require('./stategies/local.js')();
};
