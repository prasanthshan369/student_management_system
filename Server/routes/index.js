const router=require('express').Router()
 const courseRouter = require('./Course')
const staffRouter = require('./Staff')
const studentRouter = require('./Student')
const userRouter=require('./User')
router.use('/api/v1/user',userRouter)
router.use('/api/v1/course',courseRouter)
router.use('/api/v1/student',studentRouter)
router.use('/api/v1/staff',staffRouter)


module.exports=router