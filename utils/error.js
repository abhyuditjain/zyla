/*jshint esversion: 6 */
'use strict';

class MyError extends Error {
    constructor(name, statusCode, message) {
        super(message);
        this.message = message;
        this.name = name;
        this.statusCode = statusCode;
    }
}

function _400(message = "Bad Request") {
    return new MyError("BadRequestError", 400, message);
}

function _404(message = "Not Found") {
    return new MyError("NotFoundError", 404, message);
}

module.exports = {
    _400: _400,
    _404: _404
};