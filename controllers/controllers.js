var models = require('../models/models'),
  utils = require('../utils/utils');

module.exports = {
  contacts: {
    handler: function (request, reply) {
      models.Contact.fetchAll().then(function (contacts) {
        reply(utils.formatJson('contacts', contacts));
      });
    }
  },

  contact: {
    handler: function (request, reply) {
      new models.Contact({id: request.params.id}).fetch().then(function(contact) {
        reply(utils.formatJson('contact', contact));
      });
    }
  },

  contactCreate: {
    handler: function (request, reply) {
      request.payload.contact.created_at = new Date();
      request.payload.contact.updated_at = new Date();
      new models.Contact(request.payload.contact).save().then(function (contact) {
        reply(utils.formatJson('contact', contact));
      });
    }
  },

  contactUpdate: {
    handler: function (request, reply) {
  console.log('update contact route found');
      request.payload.contact.updated_at = new Date();
      new models.Contact(request.payload.contact).save().then(function (contact) {
        reply(utils.formatJson('contact', contact));
      });
    }
  }
};
