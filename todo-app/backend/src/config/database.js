const mongoose = require('mongoose')
mongoose.Promise = global.Promise //Usar api do node inves do depreciado do moongoose, para tirar warning.

module.exports = mongoose.connect('mongodb://localhost/todo')