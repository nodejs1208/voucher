var teacher = require('../../app/controllers/teacher.server.controller');
var passport = require('passport');
module.exports = function(app){

  app.route('/signup')
     .get(teacher.renderSignup)
     .post(teacher.signup);

  app.route('/signin')
     .get(teacher.renderSignin)
     .post(passport.authenticate('local',{
       successRedirect : '/',
       failureRedirect : '/signin',
       failureFlash : true
     }));


     app.get('signout',teacher.signout);

  app.route('/teacher')
    .post(teacher.create)
    .get(teacher.list);

  app.route('/teacher/:teacherId')
     .get(teacher.read)
     .put(teacher.update)
     .delete(teacher.delete);

  app.param('teacherId',teacher.teacherByID);

};
