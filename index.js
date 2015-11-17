var Hapi = require('hapi');
var path = require('path');

var routes = require('./routes');
var plugins = require('./plugins');

var server = new Hapi.Server();

server.connection({
  port: process.env.PORT
});

routes.forEach(function(route) {
  server.route(route);
});

server.start(function () {
  console.log('Server running at:', server.info.uri);
});
