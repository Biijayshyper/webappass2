let mongoose = require('mongoose');

//create model class
let contactsModel = mongoose.Schema({
    name: String,
    number: Number,
    country: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('contactlist', contactsModel);