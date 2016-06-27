var express= require('express');
var morgan = require('morgan');
var compress = require('compression');
var bodyParser =require('body-parser');
var methodOverride =require('method-override');
var session =require('express-session');
var config = require('./config');
var passport = require('passport');

module.exports =function(){
  var app =express();

  if( process.env.NODE_ENV==='development'){
    app.use(morgan('dev'));
  }else if(process.envNODE_ENV ==='production'){
    app.use(compress());
  }

  app.use(bodyParser.urlencoded({
    extended:true
  }));
  app.use(bodyParser.json());
  app.use(methodOverride());

  app.use(session({
    saveUninitialized:true,
    resave:false,
    secret:config.sessionSecret
  }));

  app.set('views','./app/views');
  app.set('view engine','ejs');
  app.use(passport.initialize());
  app.use(passport.session());

  require('../app/routes/index.server.routes.js')(app);
  require('../app/routes/teacher.server.routes.js')(app);

  app.use(express.static('./public'));
  return app;
};
