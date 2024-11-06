const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5050;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("./public"));

// MongoDB connection
mongoose.connect(process.env.DB_CONNECT, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

// Import job-related functions
const { searchJobs } = require('./utils/search-job.js');
app.get('/search-jobs', searchJobs);

const { addJob } = require('./utils/create-job');
app.post('/add-job', addJob);

const { editJob, getJobById } = require('./utils/update-job');
app.put('/edit-job/:id', editJob);
app.get('/view-job/:id', getJobById);

const { viewJobs } = require('./utils/view-job');
app.get('/view-jobs', viewJobs);

// Fix: Replace `startPage` with the actual name of your HTML file (e.g., 'index.html')
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Start the server and log the base URL
const server = app.listen(PORT, function () {
    const address = server.address();
    const baseUrl = `http://${address.address === "::" ? 'localhost' : address.address}:${address.port}`;
    console.log(`Demo project at: ${baseUrl}`);
});

module.exports = { app, server };
