console.log("Hello from the server file");

const express = require("express"),
        app   = express(),
    bodyParser = require("body-parser"),
    passport  = require("passport"),
    passportLocal = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    mongoose      = require("mongoose");