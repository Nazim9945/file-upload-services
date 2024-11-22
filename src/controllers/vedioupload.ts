import { Request, Response } from "express";
import { v2 as cloudinary } from "cloudinary";
import fileschema from "../model/filedata";
import { UploadedFile } from "express-fileupload";
export const vedioupload = async (req: Request, res: Response) => {
  try {
    const { name, tag, email } = req.body;
    const file = req.files?.vediofile as UploadedFile;
     const format = ["mp4", "mov"];
     let fileformat = file.name.split(".").at(-1) || "";
     if (!format.includes(fileformat)) {
       return res.status(404).json({
         message: `${fileformat} format is not supported`,
       });
     }
    const results = await cloudinary.uploader.upload(file.tempFilePath, {
      folder: "my-new-test-folder",
      display_name: "vedio" + Math.floor(Math.random() * 100).toString(),
      resource_type: "auto",
    });
    console.log(results);

    if (!results) {
      return res.status(400).json({
        message: "failed to upload vedio on cloudinary",
      });
    }
    const newdata = await fileschema.create({
      name,
      tag,
      email,
      imageUrl: results.secure_url,
    });
    console.log(newdata);
    return res.status(200).json({
      messgae: "successfully uploaded on cloudinary",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "issue while uploading",
    });
  }
};
