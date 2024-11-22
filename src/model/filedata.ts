import mongoose from "mongoose";
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
export default mongoose.model("filedata", filedata);