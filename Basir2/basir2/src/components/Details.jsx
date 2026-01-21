import { useEffect, useState } from "react";
import axios from "axios";
function Details() {
  //now i need to call the api
  const [kam, setkam] = useState({});
  useEffect(() => {
    const hamarkam = async () => {
      const sabdata = await await axios.get(
        "https://jsonplaceholder.typicode.com/users",
      );
      setkam(sabdata);
      console.log(sabdata);
    };
    hamarkam();
  }, []);
  return (
    <>
      <h1> this is the details of the all student </h1> <br />
      <br />
      <div>
        {kam.forEach((element) => {
          <h3>{element}</h3>;
        })}
      </div>
    </>
  );
}
export default Details;

// "https://jsonplaceholder.typicode.com/users",
