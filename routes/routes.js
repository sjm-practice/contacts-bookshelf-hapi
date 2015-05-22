'use strict';

var  controllers = require('../controllers/controllers');

module.exports = [{
  method: 'GET',
  path: '/api/contacts',
  config: controllers.contacts
}, {
  method: 'GET',
  path: '/api/contacts/{id}',
  config: controllers.contact
}, {
  method: 'POST',
  path: '/api/contacts',
  config: controllers.contactCreate
}, {
  method: 'PUT',
  path: '/api/contacts/{id}',
  config: controllers.contactUpdate
}];
