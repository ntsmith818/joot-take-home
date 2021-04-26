const repairControllers = require('../controllers/repairsControllers.js')
const express = require('express')
const router = express.Router()


router.get('/', repairControllers.getRepairs)
router.get('/:repairId', repairControllers.getRepairs)
router.post('/:customerId/create', repairControllers.createRepair)
router.delete('/:repairId/customer/:customerId/delete', repairControllers.deleteRepair)
router.put('/:inventoryId/update',  repairControllers.updateRepair)

module.exports = router