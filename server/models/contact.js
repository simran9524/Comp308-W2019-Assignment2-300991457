/*
    File name: contact.js
    name: Simran
    Student id: 300991457
    date: 30 march, 2019
*/
let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
},
{
    collection: "first"
});

module.exports = mongoose.model('contact', contactSchema);