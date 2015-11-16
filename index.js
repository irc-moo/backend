var Hapi = require('hapi');
var path = require('path');
var settings = require('config');

var routes = require('./routes');
// var plugins = require('./plugins');

var server = new Hapi.Server();

server.connection({
  port: process.env.PORT || settings.port
});

routes.forEach(function(route) {
  server.route(route);
})

server.start(function () {
  console.log('Server running at:', server.info.uri, '\nconfig:\n', JSON.stringify(settings, 2, 2));
});
