"use strict";
exports.__esModule = true;
require('dotenv').config();
// config() will read your .env file, parse the contents, assign it to process.env.
exports["default"] = {
    port: process.env.PORT
};
