/*jshint esversion: 6 */
"use strict";

const db = require("../connections/db");
const Bluebird = require("bluebird");
const error = require("../utils/error");

const assignDefaultPhoneNumber = function (numTries = 0) {
    return Bluebird.try(() => {
        return db.raw("SELECT nextval('phone_number_sequence');");
    }).then((data) => {
        const newPhoneNumber = data.rows[0].nextval;
        return db("assigned_phone_numbers").insert({
            number: newPhoneNumber
        }, ["*"]);
    }).then((data) => {
        console.log(data);
        return data[0];
    }).catch((err) => {
        console.log(err);
        if (numTries <= 8888888888) {
            return assignDefaultPhoneNumber(numTries + 1);
        }
        throw error._404("No phone number found");
    });
};

const assignRequestedPhoneNumber = function (number) {
    return Bluebird.try(() => {
        return db("assigned_phone_numbers").insert({
            number: number
        }, ["*"]);
    }).then((data) => {
        console.log(data);
        return data[0];
    }).catch((err) => {
        return assignDefaultPhoneNumber();
    });
};


module.exports = {
    assignDefaultPhoneNumber: assignDefaultPhoneNumber,
    assignRequestedPhoneNumber: assignRequestedPhoneNumber
};