/*jshint esversion: 6 */
'use strict';

const getPhoneSchema = {
    "type": "object",
    "properties": {
        "numberRequested": {
            "type": "number",
            "minimum": 1111111111,
            "maximum": 9999999999
        }
    },
    "additionalProperties": false
};

module.exports = {
    getPhoneSchema: getPhoneSchema
};