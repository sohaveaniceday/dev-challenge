'use strict'

const env = process.env.NODE_ENV || "test"
const port = process.env.PORT || 4000
const dbURI = process.env.DB_URI || `mongodb://localhost/supplier-app-${env}`

module.exports = { env, dbURI, port }

const chai = require('chai')
global.should = chai.should()
global.expect = chai.expect

const supertest = require('supertest')
const app = require('../index')
global.api = supertest(app)
