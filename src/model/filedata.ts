import mongoose from "mongoose";
import { mailsendfun } from "../config/mailerconnect";
const filedata=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim:true
    },
    tag:{
        type:String,
        trim:true,
        default:"Random one"

    },
    imageUrl:{
        type:String
    },
    email:{
        type:String,
        trim:true,
        require:true
    }
})
// const newone=mongoose.model("filedata",filedata)
// export default newone
filedata.post('save',async function(doc){
    console.log(doc)
    const option={
       to:doc.email || "",
        from:"Nazim",
        body:`you can access your file using this link ${doc.imageUrl}`
    }
    try {
        await mailsendfun(option);
        
        console.log("sent successfully ")
    } catch (error) {
        console.log("failed to send email")
       console.log(error);

    }
    
})
export default mongoose.model("filedata", filedata);