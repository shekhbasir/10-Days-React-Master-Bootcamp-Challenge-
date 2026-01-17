import React from "react";

function App() {
  let count = 1;
  function add() {
    count++;
    console.log(count);
  }
  return (
    <>
      <div
        className={`${
          count == 3
            ? "bg-amber-400 h-screen w-full"
            : "bg-gray-400 h-screen w-full"
        }`}
      >
        <button
          className="h-[50px] w-[100px] bg-gray-300 cursor-pointer rounded-2xl"
          onClick={add}
        >
          Click
        </button>
      </div>
    </>
  );
}

export default App;

//by this way i am going to work with the normal code
