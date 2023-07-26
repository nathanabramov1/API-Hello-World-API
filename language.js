const mongoose = require('mongoose');
const { Schema } = mongoose;

//Schema 
const languageSchema = new Schema({
    name: {type: String, required: true},
    greeting: String,
    panagram: String,
    filler: String,
});

//model and export 
const Language = monggose.model('Language', languageSchema);
module.exports = Language