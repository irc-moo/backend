const Hapi = require('hapi');
const manifest = require('./package.json');

const routes = require('./routes');

module.exports = start;

function start(port) {
  const server = new Hapi.Server();

  server.connection({
    port
  });

  routes.forEach((route) => {
    server.route(route);
  });

  server.register([
    {
      register: require('good'),
      options: {
        reporters: [{
          reporter: require('good-console'),
          args: [{ log: '*', request: '*', ops: '*', error: '*' }]
        }]
      }
    },
    {
      register: require('hapi-swaggered'),
      options: {
        info: {
          title: 'irc-moo API',
          version: manifest.version
        }
      }
    },
    {
      register: require('hapi-swaggered-ui'),
      options: {
        title: 'irc-moo API',
        path: '/docs',
        swaggerOptions: {
          validatorUrl: null
        }
      }
    }
  ], function (err) {
    if(err) {
      throw err;
    }
  });

  server.start(() => {
    console.log('Server running at:', server.info.uri);
  });

  return server;
}
