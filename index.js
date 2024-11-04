var express = require("express");
var bodyParser = require("body-parser");
// Importing mongoose module for MongoDB database operations
const mongoose = require('mongoose');
// Importing dotenv module to load environment variables from a .env file into process.env
require('dotenv').config();
var app = express();
const PORT = process.env.PORT || 5050;
var startPage = "index.html";
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("./public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/" + startPage);
});

// Setting mongoose to use strict query
mongoose.set('strictQuery', true);

console.log(process.env.DB_CONNECT)
// Connecting to MongoDB database using the connection string from environment variables
mongoose.connect(process.env.DB_CONNECT)
    .then(() => {
        console.log('MongoDB connected. . .'); // Log when successfully connected
    });

server = app.listen(PORT, function () {
  const address = server.address();
  const baseUrl = `http://${address.address == "::" ? "localhost" : address.address
    }:${address.port}`;
  console.log(`Demo project at: ${baseUrl}`);
});
module.exports = { app, server };

