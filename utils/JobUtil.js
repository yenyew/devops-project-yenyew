const Job = require('../models/jobs'); // Import the Job model

// Add a new job
async function addJob(req, res) {
    try {
        const { name, location, description, owner } = req.body;

        // Validate job details
        if (!owner.includes('@') || !owner.includes('.') || description.length < 6) {
            return res.status(400).json({ message: 'Validation error' });
        }

        // Create and save the new job using the Job model
        const newJob = new Job({
            name,
            location,
            description,
            owner
        });

        const savedJob = await newJob.save();
        return res.status(201).json(savedJob);
    } catch (error) {
        console.error("Error adding job:", error);
        return res.status(500).json({ message: error.message });
    }
}

// View all jobs
async function viewJobs(req, res) {
    try {
        const allJobs = await Job.find(); // Fetch all jobs from MongoDB
        return res.status(200).json(allJobs);
    } catch (error) {
        console.error("Error viewing jobs:", error);
        return res.status(500).json({ message: error.message });
    }
}

// Edit a job
async function editJob(req, res) {
    try {
        const id = req.params.id;
        const { name, location, description } = req.body;

        // Update job by ID
        const updatedJob = await Job.findByIdAndUpdate(
            id,
            {
                name,
                location,
                description,
                updated_at: new Date() // Set updated_at to the current time
            },
            { new: true } // Return the modified document
        );

        if (updatedJob) {
            return res.status(200).json({ message: 'Job modified successfully!', job: updatedJob });
        } else {
            return res.status(404).json({ message: 'Job not found' });
        }
    } catch (error) {
        console.error("Error editing job:", error);
        return res.status(500).json({ message: error.message });
    }
}

// Delete a job
async function deleteJob(req, res) {
    try {
        const id = req.params.id;

        // Delete job by ID
        const deletedJob = await Job.findByIdAndDelete(id);

        if (deletedJob) {
            return res.status(200).json({ message: 'Job deleted successfully!' });
        } else {
            return res.status(404).json({ message: 'Job not found' });
        }
    } catch (error) {
        console.error("Error deleting job:", error);
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    addJob,
    viewJobs,
    editJob,
    deleteJob
};
