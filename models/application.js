const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 18 // Assuming a minimum age for applicants
    },
    education: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /\d{6,}/.test(v); // Basic validation: at least 6 digits
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    applied_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Applicant', applicantSchema);
