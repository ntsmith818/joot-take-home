const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RepairScehma = new Schema({
    bikeDetails: { 
        repairType: { type: String, required: true },
        bikeModel: { type: String, required: true },
    }, 
    repairNotes: String,
    rush: { type: Boolean, default: false },
    scheduledDate: { type: Date, default: Date.now } 
});

const Repair = mongoose.model('Repair', RepairScehma);
module.exports = Repair
