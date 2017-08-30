/*jshint esversion: 6 */
"use strict";

const router = require("express-promise-router")();
const Bluebird = require("bluebird");
const Phone = require("../models/phone");
const validations = require("../utils/validations");

router.get("/", function (req, res) {
    return Bluebird.try(() => {
        if (!validations.getPhoneSchemaValidate(req.query)) {
            throw validations.constructError(validations.getPhoneSchemaValidate.errors);
        }

        if (req.query.numberRequested) {
            return Phone.assignRequestedPhoneNumber(req.query.numberRequested);
        }
        return Phone.assignDefaultPhoneNumber();
    }).then((data) => {
        return res.status(200).send(data);
    });
});

module.exports = router;