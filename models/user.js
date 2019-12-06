var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    googleId: String
}, {
    timestamps: true
});


module.exports = mongoose.model('User', userSchema);