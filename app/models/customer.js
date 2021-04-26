const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String, required: true },
    lasName: { type: String, required: true },
  },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
  },
  email: { type: String, required: true },
  dateJoined: { type: Date, default: Date.now }, 
  phoneNumber: { type: String, required: true },
  scheduledRepairs: Array, 
});

const Customer = mongoose.model('Customer', CustomerSchema);
module.exports = Customer
