const Job = require('../models/jobs');
const Application = require('../models/application'); // Import the Application model

async function applyjob(req, res) {
    try {
        const { name, age, education, phone } = req.body;

        // Validate input
        if (!phone || phone.length < 6) {
            return res.status(400).json({ message: 'Validation error: phone number must be at least 6 digits' });
        }

        // Create a new application entry
        const newApplication = new Application({ name, age, education, phone });
        const savedApplication = await newApplication.save();

        return res.status(201).json(savedApplication);
    } catch (error) {
        console.error("Error applying for job:", error);
        return res.status(500).json({ message: 'An error occurred', error });
    }
}

module.exports = {
    applyjob
};