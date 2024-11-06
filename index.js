const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5050;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("./public"));

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECT, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

// Import job-related functions
const {applyjob } = require('./utils/applyjob');

app.post('/apply-job',applyjob);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

const server = app.listen(PORT, function () {
    console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = { app, server };
