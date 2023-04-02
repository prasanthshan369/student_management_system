const { addStudent, getStudent, read, update, deletes } = require('../controllers/studentController')
const upload = require('../middlewares/multer')

const studentRouter=require('express').Router()

studentRouter.post('/create',addStudent)
studentRouter.post('/read',read)
studentRouter.post('/update/:id',update)
studentRouter.post('/delete',deletes)
studentRouter.get('/all',getStudent)

module.exports=studentRouter