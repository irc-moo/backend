const Hapi = require('hapi');
const path = require('path');

const routes = require('./routes');
const plugins = require('./plugins');

if(module.parent) {
  module.exports = start;
} else {
  const server = start(process.env.PORT);
  module.exports = server;
}

function start(port) {
  const server = new Hapi.Server();

  server.connection({
    port
  });

  routes.forEach((route) => {
    server.route(route);
  });

  server.start(() => {
    console.log('Server running at:', server.info.uri);
  });

  return server;
}
