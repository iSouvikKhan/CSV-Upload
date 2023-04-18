const mongoose = require('mongoose');

const connection = "mongodb+srv://souvikmukherjee089:Souvik12345@csv-cluster.imdnhnr.mongodb.net/?retryWrites=true&w=majority";

// mongoose.connect('mongodb://127.0.0.1:27017/csvUploads');

mongoose.connect(connection, { useNewUrlParser: true });

const db = mongoose.connection;

db.once('open', function () {
    console.log('database connected to the server successfully!');
});

module.exports = db;