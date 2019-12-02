var mongoose = require('mongoose');


var applicationSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        required: true
    },
    employer: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    dateApplied: {
        type: Date,
        default: Date.now(),
        require: true
    },
    salaryRange: {
        type: Number
    },
    notes: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Application', applicationSchema);