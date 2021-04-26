const Repair = require('../models/repair.js')
const Customer = require('../models/customer.js')

const createRepair = async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.customerId) 
        const newRepair = await Repair.create(req.body)
        // embedding documents is not ideal, can also reference a related docuemented by creating a relationship on _id, like relational db. 
        customer.repairs.push(newRepair)
        customer.save()
        
        res.status(201).json({
            status: 'success', 
            data: newRepair
        })
    } catch (err) {
        console.log(err.message)
        res.status(409).json({
            status: 'error', 
            message: err.message
        })
    }
}

const getRepairs = async (req, res) => {
    try {
        const repairs = await Repair.find({}).limit(100)

        res.status(200).json({
            status: 'success',
            data: repairs
        })
    } catch (err) {
        res.status(404).json({
            status: 'error',
            message: err.message
        })
    }
}

const getRepair = async (req, res) => {
    try {
        const repair = await Repair.findById(req.params.repairId)
        
        res.status(200).json({
            status: 'success',
            data: repair 
        })
    } catch (err) {
        res.status(404).json({
            status: 'error', 
            message: err.message
        })
    }
}

// todo: delete Repair as a subdocument of Customer
const deleteRepair = async (req, res) => {
    try {
        // need to find the customer parent document to remove it from a customers scheduledRepairs
        await Customer.findByIdAndUpdate(
            req.params.customerId, { $pull: { scheduledRepairs: { _id: req.params.repairId }}}, { new: true })
        // delete repair document in the repairs collection
        await Repair.findByIdAndDelete(req.params.repairId)

        res.status(204).json({
            status: 'success',
            data: { deleted: 1 }
        })
    } catch(err) {
        return res.status(409).json({
            status: 'error',
            message: err.message
        })
    }
}

const updateRepair = async (req, res) => {
    try {
        const updatedCustomer = await Repair.findByIdAndUpdate({ _id: req.params.repairId }, req.body)
        
        res.status(200).json({
            status: 'success', 
            data: updatedCustomer 

        })
    } catch(err) {
        return res.status(400).json({
            status: 'error', 
            message: 'Request could not be completed'
        })
    }
}


module.exports =  {
    createRepair, 
    getRepairs,
    getRepair,
    deleteRepair,
    updateRepair,
}

