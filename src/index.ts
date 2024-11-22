import express from 'express'
import fileUpload from 'express-fileupload';
import uploadroute from './routes'
import dotenv from 'dotenv';
dotenv.config()
const app=express();
const PORT=process.env.PORT || 4000
app.use(express.json())
// app.use(fileUpload())
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use('/api/v1',uploadroute)
app.listen(PORT,()=>console.log("working fine at port ",PORT))