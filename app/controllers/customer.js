const Customer = require('../models/customer.js')


const createCustomer = async (req, res) => {
    try {
        const newCustomer = await Customer.create(req.body)

        res.status(201).json({
            status: 'success',
            data: newCustomer 
        });
    } catch (err) {
        return res.status(409).json({
            state: 'error', 
            message: err.message
        })
    }
}

const getCustomers = async (req, res) => {
    try {
        const customers = await Customer.find({}).limit(100)
        
        res.status(200).json({
            status: 'success',
            data: customers 
        });
    } catch (err) {
        return res.status(404).json({
            status: 'error',
            message: err.message
        })
    }
}

const getCustomer = async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.customerId)

        res.status(200).json({
            status: 'success',
            data: customer
        });
    } catch(err) {
        return res.status(404).json({
            status: 'error',
            message: err.message
        })
    }
}

const deleteCustomer = async (req, res) => {
    try {
        await Customer.deleteOne({_id: req.params.customerId})

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
// todo: be able to update nested fields 
const updateCustomer = async (req, res) => {
    try {
        const updatedCustomer = await Customer.findByIdAndUpdate({ _id: req.params.customerId }, req.body)
        
        res.status(200).json({
            status: 'success', 
            data: updatedCustomer 

        })
    } catch(err) {
        return res.status(400).json({
            status: 'error', 
            message: err.message
        })
    }
}


module.exports =  {
    createCustomer, 
    getCustomers,
    getCustomer,
    deleteCustomer,
    updateCustomer,
}

