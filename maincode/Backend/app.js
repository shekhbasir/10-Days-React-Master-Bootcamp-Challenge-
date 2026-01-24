const express=require('express');
const cors=require('cors');
const multer=require('multer');
const cloudinary=require('cloudinary').v2;
const {CloudinaryStorage}=require('multer-storage-cloudinary');
require('dotenv').config();
const app=express();

app.use(cors());

cloudinary.config({
  cloud_name:process.env.CLOUD_NAME,
  api_key:process.env.API_KEY,
  api_secret:process.env.API_SECRET,
})
//now i am going to making the storage 

const storage=new CloudinaryStorage({
  cloudinary:cloudinary,
  params:{
    folder:"upload",
    allowed_formats:["jpg","jpeg","png","pdf"]
  }
})
const upload=multer({storage})
//simply i am going to making the routes 
app.post("/upload",upload.single("photo"),(req,res)=>{
  res.json({
    message:"the data will going to pass",
    file:req.file.path,
    filename:req.file,
  })
  console.log(req.file.path)
})

//now
const PORT=process.env.PORT||6000;

app.listen(PORT,()=>{
  console.log(`this is the link http://localhost:${PORT}`)
})