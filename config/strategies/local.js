var passport = require('passport');

var LocalStrategy = require('passport-local').Strategy;
var Teacher = require('mongoose').model('Teacher');

module.exports =function(){

  passport.use(new LocalStrategy(function(teacher_id,password,done){

Teacher.findOne({
  teacher_id:teacher_id
},
function(err,teacher_id){
  if(err){
    return done(err);
  }
  if(!teacher_id){
    return done(null,false,{message:'없는 사용자'});
  }

  if(!teacher_id.authenticate(password)){
    return done(null,false,{message:'암호가 맞지 않습니다'});
  }

  return done(null,teacher_id);
});
  }));
};
