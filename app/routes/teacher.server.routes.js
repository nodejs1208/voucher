var teacher = require('../../app/controllers/teacher.server.controller');

module.exports = function(app){

  app.route('/teacher')
    .post(teacher.create)
    .get(teacher.list)

  app.route('/teacher/:teacherId')
     .get(teacher.read)
     .put(teacher.update)
     .delete(teacher.delete);

  app.param('teacherId',teacher.teacherByID);

};
