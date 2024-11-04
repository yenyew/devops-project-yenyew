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
const { addJob, viewJobs, editJob, deleteJob, searchJobs } = require('./utils/JobUtil');
app.post('/add-job', addJob);
app.get('/view-jobs', viewJobs);
app.put('/edit-job/:id', editJob);
app.delete('/delete-job/:id', deleteJob);
app.get('/search-jobs', searchJobs);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/" + startPage);
});

const server = app.listen(PORT, function () {
    const address = server.address();
    const baseUrl = `http://${address.address === "::" ? 'localhost' : address.address}:${address.port}`;
    console.log(`Demo project at: ${baseUrl}`);
});

module.exports = { app, server };
