import React from "react";
import Details from "./components/Details";

function App() {
  //from here i am gong to ending the data
  const kam = [
    {
      name: "sheikh basir",
      add: "bara Nepal",
      marks: 23,
    },
    {
      name: "komal",
      add: "routahat",
      marks: 43,
    },
    {
      name: "pinkey yadav",
      add: "parwanipur Bara",
      marks: 40,
    },
    {
      name: "Niva Yadav",
      add: "Nehal",
      marks: 50,
    },
  ];
  console.log(kam);
  return (
    <>
      {kam.map((kam1) => (
        <Details alldata={kam1} />
      ))}
    </>
  );
}

export default App;

//now i am going to use the props concept
