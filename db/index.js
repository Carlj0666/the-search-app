// --------- DB Connection - config ---------

const mongoose = require('mongoose');

mongoose.Promise = Promise;
const chalk = require('chalk');

mongoose.connect('mongodb://localhost/search-app-db', { useMongoClient: true });

const db = mongoose.connection;

db.on('error', () => {
    console.log(chalk.red('DB connection failed'))
});

db.once('open', () => {
    console.log(chalk.green('DB connection successful'))
});

// -------- DB Schema - model(s) ---------

const imageSchema = new mongoose.Schema({
    id: String,
    query: String,
    urlLink: String,
    description: String,
    width: Number,
    height: Number, 
    color: String
  });

  const Image = mongoose.model('Image', imageSchema);

// >> Here you will define your schema (aka database model) which will define each instance of a row in our database (basically the definition of each unit of data)

// -------- DB Methods - controllers ---------
const getImages = function(query) {
    return Image.find({query: query})
}
// >> Here you will define the controllers (or methods) that will interact with the database in order to input, retrieve, and/or remove units of data
