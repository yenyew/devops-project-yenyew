const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
<<<<<<< HEAD
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    companyEmail: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /\S+@\S+\.\S+/.test(v); // Basic email validation
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    companyName: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date
    }
=======
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
>>>>>>> f6f4cbe073d9f6432550c8d3cf20bd16cbf7421c
});

module.exports = mongoose.model('Jobs', jobSchema);
