const express=require('express')
const app=express()
const cors=require('cors')
require('dotenv').config({path:'./config/.env'})
const DbConnect = require('./config/database');
const router = require('./routes');
app.use(express.json())
app.use(cors())
app.use(express.static('./public'))
DbConnect();
app.use('/',router)

app.listen(5000,()=>{
    console.log('Server is up and runnig');
})