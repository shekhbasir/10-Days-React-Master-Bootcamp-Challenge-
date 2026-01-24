import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setdata] = useState("");

  const Handlesubmit = async (e) => {
    e.preventDefault();

    const file = e.target.elements.photo.files[0];
    if (!file) {
      alert("Please select a file");
      return;
    }

    try {
      const formdata = new FormData();
      formdata.append("photo", file);

      const res = await axios.post("http://localhost:7000/upload", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // ✅ Cloudinary URL
      console.log("URL:", res.data.file);
      setdata(res.data.file);
    } catch (error) {
      console.log("this is the error ", error);
    }
  };

  return (
    <>
      <h2>this is the code of the multer</h2>

      <form onSubmit={Handlesubmit}>
        <input type="file" name="photo" /> <br />
        <br />
        <input type="submit" />
      </form>

      <br />
      <br />

      {/* ✅ URL print */}
      {data && <h3>{data}</h3>}

      {/* ✅ Image preview */}
      {data && (
        <img
          src={data}
          alt="uploaded"
          style={{ width: "300px", marginTop: "10px" }}
        />
      )}
    </>
  );
}

export default App;
