import { useState } from "react";

function Details(props) {
  const sabdata = props.alldata;

  const [count, setCount] = useState(0);

  function kamkar() {
    setCount(count + 1);
  }

  const totalBoxes = count === 5 ? 4 : 3;

  return (
    <>
      {Array(totalBoxes)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            style={{
              height: "200px",
              width: "400px",
              backgroundColor: count === 5 ? "blue" : "red",
              marginBottom: "10px",
            }}
          >
            <h1>Name: {sabdata.name}</h1>
            <h1>Address: {sabdata.add}</h1>
            <h1>Marks: {sabdata.marks}</h1>
          </div>
        ))}

      <button onClick={kamkar}>Click Kar ({count})</button>
    </>
  );
}

export default Details;
