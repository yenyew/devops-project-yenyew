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

module.exports = router;
