var Hapi = require('hapi');
var path = require('path');
var settings = require('config');

var routes = require('./routes');
var plugins = require('./plugins');
var models = require('./models');

var server = new Hapi.Server({
  connections: {
    routes: {
      cors: settings.cors
    }
  }
});

server.connection({
  port: settings.port,
  host: settings.host
});

server.start(function(){
  server.log('info', 'Server running at: ' + server.info.uri);
});

module.exports = server;
