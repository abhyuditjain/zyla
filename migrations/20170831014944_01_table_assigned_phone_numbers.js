/*jshint esversion: 6 */
"use strict";

exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTableIfNotExists("assigned_phone_numbers", function (table) {
            table.biginteger("number").primary();
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists("assigned_phone_numbers")
    ])
};
