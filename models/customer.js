const mongoose = require("mongoose");

// customer schema
const customerSchema = mongoose.Schema({
    firstName: { type: String},
    lastName: { type: String},
    phone: { type: String},
    email: { type: String}
});

module.exports = mongoose.model('Customer', customerSchema);
