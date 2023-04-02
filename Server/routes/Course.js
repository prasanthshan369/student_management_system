const {addCourse, allData,deletes, updates, read} = require('../controllers/couseController')

const courseRouter=require('express').Router()

courseRouter.post('/create',addCourse)
courseRouter.post('/delete',deletes)
courseRouter.post('/updates/:id',updates)
courseRouter.post('/read',read)
courseRouter.get('/all',allData)


module.exports=courseRouter