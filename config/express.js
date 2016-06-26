var express= require('express');
var morgan = require('morgan');
var compress = require('compression');
var bodyParser =require('body-parser');
var methodOverride =require('method-override');


module.exports =function(){
  var app =express();

  if( process.env.NODE_ENV==='development'){
    app.use(morgan('dev'));
  }else if(process.envNODE_ENV ==='production'){
    app.use(compress());
  }

  app.use(bodyParser.urlencoded)({
    extended:true
  }));
  app.use(bodyParser.json());
  app.use(methodOveride());
  require('../app/routes/index.server.routes.js')(app);
  return app;
}