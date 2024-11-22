import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
const transporter = nodemailer.createTransport({
  host: process.env.mail_host,
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.mail_user,
    pass: process.env.mail_pass,
  },
});
interface Props{
    from:string,
    to:string,
    body:string
}
export async function mailsendfun({from,to,body}:Props) {
  const info =transporter.sendMail({
    
    from:  from ,
   
    to:  to,
    subject: "Hello ✔ New file uploaded on cloudinary!!",
   
    html:  body // html body
  });

 
  return info
}

