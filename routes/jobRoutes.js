const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Jobs = require('../models/jobs');

// Add a new job listing
router.post('/jobs', async (req, res) => {
  try {
    const { name, location, description, owner } = req.body;

    // Create a new job instance
    const newJob = new Jobs({
      name,
      location,
      description,
      owner
    });

    // Save the job to the database
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Search for jobs
router.get('/jobs/search', async (req, res) => {
  try {
    const { name, location, description } = req.query;
    
    // Build search criteria object
    let searchCriteria = {};
    
    if (name) searchCriteria.name = { $regex: name, $options: 'i' }; // Case-insensitive search
    if (location) searchCriteria.location = { $regex: location, $options: 'i' };
    if (description) searchCriteria.description = { $regex: description, $options: 'i' };

    // Find jobs matching the search criteria
    const jobs = await Jobs.find(searchCriteria);
    
    if (jobs.length === 0) {
      return res.status(404).json({ message: 'No jobs found' });
    }

    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
