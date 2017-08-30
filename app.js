/*jshint esversion: 6 */
"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const routes = require("./routes/phone");

const app = express();

const port = normalizePort(process.env.PORT || "8080");

// Enable helmet (headers)
app.use(helmet());
app.use(helmet.noCache());

// Enable cors
app.use(cors());
// Enable cors for verbs other than GET/HEAD/POST
app.options("*", cors());

// log
app.use(morgan("dev"));

// json request parser
app.use(bodyParser.json({limit: "1mb"}));

app.use('/static', express.static(__dirname + '/public'));

app.get("/", function (req, res) {
    return res.json({
        success: true,
        data: {
            message: "Welcome to the API"
        }
    });
});

app.use("/phone", routes);

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

app.use(function (err, req, res, next) {
    // res.status(err.status || 500);

    return res.status(err.statusCode || 500).json({
        reason: err.statusCode === 500 ? "Something went wrong" : err.message,
        success: false
    });
});

app.listen(port, function () {
    console.log("App running on port: " + port);
});

module.exports = app;