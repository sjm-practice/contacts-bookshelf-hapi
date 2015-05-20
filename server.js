'use strict';

var Hapi = require('hapi'),
  config = require('./config/settings'),
  routes = require('./routes/routes');

var server = new Hapi.Server();
server.connection({ port: config.port });

server.route(routes);

server.start(function () {
  console.log('Server running at:', server.info.uri);
});

module.exports = server;
