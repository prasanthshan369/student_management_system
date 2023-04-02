const userRouter=require('express').Router()

const { getUser, signup, login } = require('../controllers/userController')
const verifiyAccount = require('../middlewares/verifiyAccount')

userRouter.get('/getdata',verifiyAccount,getUser)
userRouter.post('/signup',signup)
userRouter.post('/login',login)



module.exports =userRouter