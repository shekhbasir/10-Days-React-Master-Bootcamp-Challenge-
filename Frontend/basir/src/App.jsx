import React, { useState } from "react";
import axios from "axios";

function App() {
  const [imageUrl, setImageUrl] = useState("");

  const Handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData();
      formdata.append("photo", e.target.elements.photo.files[0]);

      const res = await axios.post("http://localhost:7000/upload", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // ✅ Cloudinary URL
      console.log(res.data.file);
      setImageUrl(res.data.file);
    } catch (error) {
      console.log("this is the error", error);
    }
  };

  return (
    <>
      <h3>Upload Image</h3>

      <form onSubmit={Handlesubmit}>
        <input type="file" name="photo" /> <br />
        <br />
        <input type="submit" />
      </form>

      {/* ✅ URL print */}
      {imageUrl && <p>{imageUrl}</p>}

      {/* ✅ Image preview */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt="uploaded"
          style={{ width: "300px", marginTop: "10px" }}
        />
      )}
    </>
  );
}

export default App;
