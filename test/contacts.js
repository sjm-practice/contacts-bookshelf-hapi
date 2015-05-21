'use strict';

process.env.NODE_ENV = 'test';

var expect = require('chai').expect,
  Lab = require('lab'),
  server = require('../server'),
  bookshelf = require('../config/bookshelf');

var lab = exports.lab = Lab.script();

/**
* Set up BDD like function calls...
*/
var describe = lab.describe,
  it = lab.it,
  before = lab.before,
  beforeEach = lab.beforeEach,
  after = lab.after,
  afterEach = lab.afterEach;

/**
* Tests...
*/
before(function (done) {
  bookshelf.knex.migrate.latest().then(function () {
    bookshelf.knex.seed.run().then(function () {
      done();
    });
  });
});

after(function (done) {
  bookshelf.knex('contacts').truncate().then(function () {
    done();
  });
});

describe('Contacts API', function() {

  it('lists all contacts', function (done) {
    var options = {
      method: 'GET',
      url: '/api/contacts'
    };

    server.inject(options, function (response) {
      var result = response.result;

      expect(response.statusCode).to.equal(200);

      var contacts = JSON.parse(result);
      expect(contacts).to.be.instanceOf(Object);
      expect(contacts.contacts).to.be.instanceOf(Array);
      expect(contacts.contacts).to.have.length(2);

      done();
    });
  });

  it('lists a single contact, when given an id', function (done) {
    var options = {
      method: 'GET',
      url: '/api/contacts/1'
    };

    server.inject(options, function (response) {
      var result = response.result;

      expect(response.statusCode).to.equal(200);

      var contact = JSON.parse(result);
      expect(contact).to.be.instanceOf(Object);
      expect(contact.contact['first_name']).to.equal('Joe');
      expect(contact.contact['middle_initial']).to.equal(null);
      expect(contact.contact['last_name']).to.equal('Smith');
      expect(contact.contact['created_at']).to.not.equal(null);
      expect(contact.contact['updated_at']).to.not.equal(null);

      done();
    });
  });

  var localContact = {
    contact: {
      first_name: 'Jack',
      middle_initial: undefined,
      last_name: 'Johnson',
      title: 'President',
      email: 'jjohnson@test.net',
      phone_number: '(555) 222-2034',
      street_address: '123 Some Street',
      city: 'Pittsburgh',
      state: 'PA',
      zip_code: '11223',
    }
  };

  // it('creates a contact', function (done) {
    // var options = {
    //   method: 'POST',
    //   url: '/api/contacts',
    //   payload: JSON.stringify(localContact)
    // };

  // });

});
