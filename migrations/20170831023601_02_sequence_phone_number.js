/*jshint esversion: 6 */
"use strict";

exports.up = function(knex, Promise) {
    return Promise.all([
        knex.raw("CREATE SEQUENCE IF NOT EXISTS phone_number_sequence INCREMENT BY 1 MINVALUE 1111111111 MAXVALUE 9999999999 CACHE 1 CYCLE;")
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.raw("DROP SEQUENCE IF EXISTS phone_number_sequence;")
    ])
};
