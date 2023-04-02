const mongoose=require('mongoose')

const DbConnect=async()=>{
    const db=await mongoose.connect(process.env.DB_URL)
    console.log(`Dbconnected with : ${db.connection.host}`);

}
module.exports=DbConnect;