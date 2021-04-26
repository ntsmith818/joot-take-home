const Inventory = require('../models/inventory.js')

const createInventory = async (req, res) => {
    try {
        const newInventory = await Inventory.create(req.body)
        // I dont think this is the best way to maintain quantity
        const currentQuantity = await Inventory.countDocuments({ catagory: req.body.catagory })
        await Inventory.updateMany({ catagory: req.body.catagory }, { quantity: currentQuantity })

        res.status(201).json({
            status: 'success', 
            data: newInventory 
        })
    } catch (err) {
        res.status(409).json({
            status: 'error', 
            message: err.message
        })
    }
}

const getInventories = async (req, res) => {
    try {
        const inventories = await Inventory.find({}).limit(100)

        res.status(200).json({
            status: 'success',
            data:  inventories 
        })
    } catch (err) {
        res.status(404).json({
            status: 'error',
            message: err.message
        })
    }
}

const getInventory = async (req, res) => {
    try {
        const inventory = await Inventory.findById(req.params.inventoryId)
        
        res.status(200).json({
            status: 'success',
            data: inventory 
        })
    } catch (err) {
        res.status(404).json({
            status: 'error', 
            message: err.message
        })
    }
}

const deleteInventory = async (req, res) => {
    try {
        await Inventory.deleteOne({_id: req.params.inventoryId})

        const currentQuantity = await Inventory.countDocuments({ type: req.body.type })
        await Inventory.updateMany({ type: req.body.type }, { quantity: currentQuantity })

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

const updateInventory = async (req, res) => {
    try {
        const updatedCustomer = await Customer.findByIdAndUpdate({ _id: req.params.inventoryId }, req.body)
        
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
    createInventory, 
    getInventories,
    getInventory,
    deleteInventory,
    updateInventory,
}

