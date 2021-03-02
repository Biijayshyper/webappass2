let mongoose = require('mongoose');

//create model class
let contactsModel = mongoose.Schema({
    name: String,
    number: Number,
    country: String
},
{
    collection: "contact"
});

module.exports = mongoose.model('contactlist', contactsModel);