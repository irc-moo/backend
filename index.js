const Server = require('./server');

const server = Server(5000 || process.env.PORT);
module.exports = server;
