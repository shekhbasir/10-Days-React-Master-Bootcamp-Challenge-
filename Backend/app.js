const express = require("express");
const cors = require("cors");
const multer = require("multer");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// file upload route
app.post("/upload", upload.single("photo"), (req, res) => {
  console.log(req.file);
  res.json({
    message: "file Uploaded Successfully",
    file: req.file,
  });
});

app.get("/", (req, res) => {
  console.log("code is running");
  res.send("Backend running");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`this is the link http://localhost:${PORT}`);
});
