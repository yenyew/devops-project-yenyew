const Job = require('../models/jobs');

// Add a new job
async function addJob(req, res) {
    try {
        const { name, location, description, salary, companyEmail, companyName } = req.body;

        // Validate required fields
        if (!name || !location || !description || !salary || !companyEmail || !companyName) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Validate email format
        if (!companyEmail.includes('@') || !companyEmail.includes('.')) {
            return res.status(400).json({ message: 'Invalid email format' });
        }

        // Validate description length
        if (description.length < 6) {
            return res.status(400).json({ message: 'Description must be at least 6 characters long' });
        }

        // Validate salary is a positive number
        if (isNaN(salary) || Number(salary) <= 0) {
            return res.status(400).json({ message: 'Salary must be a positive number' });
        }

        // Create and save the new job
        const newJob = new Job({
            name,
            location,
            description,
            salary,
            companyEmail,
            companyName,
        });

        const savedJob = await newJob.save();
        return res.status(201).json(savedJob);
    } catch (error) {
        console.error("Error adding job:", error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {
    addJob,
};
