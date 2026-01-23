import React from "react";
import axios from "axios";
function Kamkar() {
  const HandlingAlldata = async (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData();
      formdata.append("photo", e.target.elements.photo.files[0]);
      await axios.post("http://localhost:5000/upload", formdata);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h2> this is the code foor the normal things</h2> <br /> <br />
      <form onSubmit={HandlingAlldata}>
        <input type="file" name="photo" /> <br /> <br />
        <input type="submit" />
      </form>
    </>
  );
}

export default Kamkar;

//now here i am going to wrting the code for the handling the data
