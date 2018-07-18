const mongoose = require('mongoose');

mongoose.connect('mongodb://dariosousa:mongo1@ds141631.mlab.com:41631/nodejscrudds', { useNewUrlParser: true }); //mongodb://localhost:27017/crud

module.exports = mongoose;