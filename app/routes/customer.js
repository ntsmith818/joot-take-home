const customerControllers = require('../controllers/customerControllers.js')
const express = require('express')
const router = express.Router()


router.get('/', customerControllers.getCustomers)
router.get('/:customerId', customerControllers.getCustomer)
router.post('/create', customerControllers.createCustomer)
router.delete('/:customerId/delete', customerControllers.deleteCustomer)
router.put('/:customerId/update', customerControllers.updateCustomer)

module.exports = router
