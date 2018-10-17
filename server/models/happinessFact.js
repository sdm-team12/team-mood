const mongoose = require('mongoose');

// Define the teamSchema model Schema
const happyFactSchema = new mongoose.Schema({
    teamID: String,
    selfHappiness: { type: 'String', required: true },
    teamHappiness: { type: 'String', required: true },
    dateAdded: { type: 'Date', default: Date.now, required: true },
    dateUpdated: { type: 'Date', required: false },
});

module.exports = mongoose.model('happinessFact', happyFactSchema);