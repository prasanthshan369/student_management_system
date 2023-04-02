const nodemailer=require('nodemailer')
require('dotenv').config({path:'../config/.env'})
const mailService=async(student_Name,student_Email)=>{
    const Transport=await nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.EMAIL_ID,
            pass:process.env.EMAIL_PASSWORD
        }
    })
    const data=await Transport.sendMail({
        from:process.env.EMAIL_PASSWORD,
        to:student_Email,
        subject:"Student Management System",
        html:`
        <div>
       <p> Hi <b>${student_Name} ,</b> this is to notify you that we have
            updaated your details successfully for the buy the course. 
        </p>
        <h3>Thank You for Visiting</h3>    
        `
    })
    console.log(data);
}
module.exports=mailService