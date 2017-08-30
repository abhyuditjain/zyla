/*jshint esversion: 6 */
'use strict';

module.exports = {
    client: 'pg',
    connection: process.env.DATABASE_URL || "postgresql://username:password@localhost:5432/db",
    pool: {
        min: 2,
        max: 10
    }
};