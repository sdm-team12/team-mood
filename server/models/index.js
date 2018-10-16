const mongoose = require('mongoose');

module.exports.connect = (uri) => {
    mongoose.connect(uri, { useNewUrlParser: true });
    // Plug in to the promise library
    mongoose.Promise = global.Promise;

    mongoose.connection.on('error', (err) => {
        console.error(`Mongoose connection error: ${err}`);
        process.exit(1);
    });

    
    // Load models
    require('./user');
    require('./team');
    require('./happinessFact');
}