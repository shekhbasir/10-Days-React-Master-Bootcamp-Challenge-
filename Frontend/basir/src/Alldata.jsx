import React, { useState } from "react";
import axios from "axios";

function Alldata() {
  const [file, setFile] = useState(null);

  // file select karne ke liye
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // submit button click
  const Hadnlesabdata = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file");
      return;
    }

    try {
      const fordata = new FormData();
      fordata.append("photo", file); // 👈 fix: key + file

      const kabhail = await axios.post("http://localhost:7000/upload", fordata);

      console.log(kabhail.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>i am the best Backend Developer</h1> <br /> <br />
      <form onSubmit={Hadnlesabdata}>
        <span>Enter Your File :</span>
        <input
          type="file"
          style={{ height: "50px", width: "200px" }}
          onChange={handleFileChange} // 👈 fix
        />
        <br />
        <br />
        <button type="submit">Upload</button>
      </form>
    </>
  );
}

export default Alldata;
