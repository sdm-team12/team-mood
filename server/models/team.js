const mongoose = require('mongoose');

// Define the teamSchema model Schema
const teamSchema = new mongoose.Schema({
    userID: String,
    name: { type: 'String', required: true },
    dateAdded: { type: 'Date', default: Date.now, required: true },
    dateUpdated: { type: 'Date', required: false },
});

module.exports = mongoose.model('Team', teamSchema);