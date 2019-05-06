// Set the node environment to be test whilst we run the tests
'use strict';

const env = process.env.NODE_ENV || "test";
const port = process.env.PORT || 4000;
const dbURI = process.env.DB_URI || `mongodb://localhost/supplier-app-${env}`;

module.exports = { env, dbURI, port };

// Require the expectation library chai
const chai    = require('chai')
// Set global variables so that we don't need to require them
global.should = chai.should()
global.expect = chai.expect

// Require supertest to 'mock' requests to our API
const supertest = require('supertest')
// Require our main index.js file where our express app is
const app       = require('../index')
// Setup a global variable with supertest to make requests
global.api      = supertest(app)
