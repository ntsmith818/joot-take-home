const repairControllers = require('../controllers/repairs.js')
const express = require('express')
const router = express.Router()


router.get('/', repairControllers.getRepairs)
router.get('/:repairId', repairControllers.getRepairs)
router.post('/:customerId/create', repairControllers.createRepair)
router.delete('/:repairId/:customerId/delete', repairControllers.deleteRepair)
router.put('/:repairId/update',  repairControllers.updateRepair)

module.exports = router