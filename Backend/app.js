const express=require("express");
const multer=require('multer');
const cors=require('cors');
require('dotenv').config();
const app=express();

app.use(cors());
app.use(express.json());
//here 
const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"./upload");
  },
  filename:(req,file,cb)=>{
    cb(null,Date.now()+"-"+file.originalname);
  }
})



const upload=multer({storage});

app.post("/upload",upload.single("photo"),(req,res)=>{
  res.json({
    message:"Your File is in Backend",
    file:req.file,
  });
  console.log(req.file);
})


const PORT=process.env.PORT||7000;

app.listen(PORT,()=>{
  console.log(`this is the link  http://localhost:${PORT}`)
})