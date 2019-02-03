const mongoose = require('mongoose');

//set up mongoDB connection

const mongoURL = "mongodb+srv://isabel:user@cluster0-ikgvh.mongodb.net/test?retryWrites=true";
console.log(mongoURL);
const options = {
    useNewUrlParser: true
};
mongoose.connect(mongoURL, options);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

//db error handling
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;