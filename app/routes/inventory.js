const inventoryControllers = require('../controllers/inventoryControllers.js')
const express = require('express')
const router = express.Router()


router.get('/', inventoryControllers.getInventories)
router.post('/create', inventoryControllers.createInventory)
router.get('/:inventoryId', inventoryControllers.getInventory)
router.delete('/:inventoryId/delete', inventoryControllers.deleteInventory)
router.put('/:inventoryId/update',  inventoryControllers.updateInventory)

module.exports = router