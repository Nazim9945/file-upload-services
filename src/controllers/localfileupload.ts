import { Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
export const localfileupload = async (req: Request, res:Response) => {
  try {
    const {name,tag,email}=req.body
    console.log(name,tag,email)
   let file = req.files?.file as UploadedFile;
    console.log("print ho ha bhai ",file)
   
   
    const filepath = __dirname + "/filescabin/" + `${file?.name}`;
    console.log("dir path ",filepath)
    file?.mv(filepath,(err)=>{
      if(err){
        return res.status(401).json({
          message:"failed to upload on server."
        })
      }
    })
    return res.status(200).json({
        message:"locally uploaded successfully"
    })
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      message: "issue while uploading file",
    });
  }
};
// export default localfileupload
