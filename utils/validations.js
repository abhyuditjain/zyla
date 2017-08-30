/*jshint esversion: 6 */
'use strict';

const Ajv = require('ajv');
const error = require('./error');
const PhoneSchemas = require("./schemas/phone");

const ajv = new Ajv({
    coerceTypes: true,
    format: 'full',
    verbose: true
});

// Error constructing helper
const constructError = function (errors) {
    const err = errors[0];
    console.log(err);
    const dataPath = err.dataPath;

    const errMessage = dataPath.replace(".", "") + " " + err.message;
    //
    // console.log(errMessage);

    return error._400(errMessage);
};

// Schemas
const getPhoneSchema = PhoneSchemas.getPhoneSchema;

// Validations
const getPhoneSchemaValidate = ajv.compile(getPhoneSchema);

module.exports = {
    constructError: constructError,
    getPhoneSchemaValidate: getPhoneSchemaValidate
};