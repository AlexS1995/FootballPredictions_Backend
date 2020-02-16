const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true);

const betSchema = new Schema({
    uid: {type: String, required: true},
    date: {type: String, required: true},
    matches: [{home: {type: String}, away: {type: String}, value: {type: String}}]
});

//betSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Bet', betSchema);