const tap = require('tap');
const test = tap.test;
const fetch = require('node-fetch');
const Server = require('../server');
const server = Server(2398);
const baseUrl = server.info.uri;

tap.test('create limited account', function(t) {
  fetch(baseUrl + '/user', {method: 'post'})
    .then(function(data) {
      server.stop();
      t.end();
    })
});
