///how i am going to changing and updating the thing

import { useState } from "react";

function Details() {
  const [data, setdata] = useState([0]);
  const kamkar = () => {
    setdata(data.map((kam) => kam * 18));
    console.log(data);
  };
  return (
    <>
      <h1> this is the code of the normal things </h1> <br /> <br />
      <button onClick={kamkar}>Click</button> <br />
      <h3>{data}</h3>
    </>
  );
}
export default Details;
