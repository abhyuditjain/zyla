/*jshint esversion: 6 */
'use strict';

const config = require('../knexfile');
const knex = require('knex')(config);

knex.raw("SET timezone = 'utc';");

module.exports = knex;

knex.migrate.latest([config]);