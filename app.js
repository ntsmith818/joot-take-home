const mongoose = require('mongoose')
const express = require('express')
const inventoryRoutes = require('../joot-take-home/app/routes/inventory.js')
const customerRoutes = require('../joot-take-home/app/routes/customer.js')
const repairRoutes = require('../joot-take-home/app/routes/repair.js')

const app = express()

app.use(express.json())

app.use('/customers', customerRoutes)
app.use('/inventories', inventoryRoutes)
app.use('/repairs', repairRoutes)

const dbUri = ''
const port = 3000
mongoose.connect(dbUri, {useNewUrlParser: true, useUnifiedTopology: true}).then(() =>  {
    app.listen(port, () => {
        console.log(`listening on ${port}`)
    })
})
