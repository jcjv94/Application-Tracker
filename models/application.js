var mongoose = require('mongoose');

var interviewSchema = new mongoose.Schema({
    interviewDate: {
        type: Date,
        default: Date.now(),
        require: true
    },
    dressCode: {
        type: String
    },
    notes: {
        type: String
    }
}, {
    timestamps: true
});


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
    },
    interviews: [interviewSchema],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Application', applicationSchema);