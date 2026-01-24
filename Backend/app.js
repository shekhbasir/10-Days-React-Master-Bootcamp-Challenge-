const express=require('express');
const multer=require('multer');
require('dotenv').config();

const cors=require('cors');
const cloudinary=require('cloudinary').v2;
const {CloudinaryStorage}=require('multer-storage-cloudinary');

const app=express();

app.use(cors());
//this is  the first step for config the clodinary 
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});




//this is the second steps for seting my storage like multer 
const storage=new CloudinaryStorage({
  cloudinary:cloudinary,
  params:{
    folder:"upload",
    allowed_formats:["jpg","png","jpeg"]
  }
})

const upload=multer({storage})

app.post("/upload",upload.single("photo"),(req,res)=>{
  res.json({
    message:"data saved there",
    file:req.file.path
  })
  console.log(req.file.path)
})
//baki kaam as it is 

const PORT=process.env.PORT||6000;


app.listen(PORT,()=>{
  console.log(`this is the link http://localhost:${PORT}`);
})


//now after this i am simply setting the frontend 