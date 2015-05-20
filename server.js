'use strict';

var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './dev.sqlite3'
  }
});

var bookshelf = require('bookshelf')(knex);

var Contact = bookshelf.Model.extend({
  tableName: 'contacts'
});

var Hapi = require('hapi'),
  config = require('./config/settings');

var server = new Hapi.Server();
server.connection({ port: config.port });

server.route({
    method: 'GET',
    path: '/api/contacts',
    config: {
      handler: function (request, reply) {
        Contact.fetchAll().then(function (contacts) {
          reply('{"contacts:" ' + JSON.stringify(contacts) + '}');
        });
      }
    }
});

server.route({
    method: 'GET',
    path: '/api/contacts/{id}',
    config: {
      handler: function (request, reply) {
        new Contact({id: request.params.id}).fetch().then(function(contact) {
          reply('{"contact:" ' + JSON.stringify(contact) + '}');
        });
      }
    }
});

server.start(function () {
  console.log('Server running at:', server.info.uri);
});

module.exports = server;
