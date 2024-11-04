const express = require('express');
const router = express.Router();
const { addJob, viewJobs, editJob, deleteJob, searchJobs } = require('../controllers/jobsController');

// Add routes
router.post('/add-job', addJob);
router.get('/view-jobs', viewJobs);
router.put('/edit-job/:id', editJob);
router.delete('/delete-job/:id', deleteJob);

// New route for searching jobs
router.get('/search-jobs', searchJobs);

module.exports = router;
