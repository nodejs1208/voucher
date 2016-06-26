var teacher = require('../../app/controllers/teacher.server.controller');

module.exports = function(app){

  app.route('/teacher').post(teacher.create);
}
