const staffRouter=require('express').Router()
const {  addStaff,allData, read, update, deletes } = require('../controllers/staffController')


staffRouter.post('/create',addStaff)
staffRouter.post('/read',read)
staffRouter.post('/update/:id',update)
staffRouter.post('/delete',deletes)
staffRouter.get('/all',allData)


module.exports=staffRouter