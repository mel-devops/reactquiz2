import React from "react";
import { useState } from "react";
export const NumberBuilder = () => {
  let [counter, setCounter] = useState(0);

  let [stringCounter, setStringCounter] = useState("");

  const handleAddNum = () => {
    setCounter(++counter);

    setStringCounter(stringCounter + " " + counter);
  };
  const handleReset = () => {
    setCounter(0);

    setStringCounter("");
  };
  return (
    <div>
      <div>
        <button onClick={() => handleAddNum()}>Add Numbers</button>
        <button onClick={() => handleReset()}>Reset</button>
      </div>
      <div>Numbers: {stringCounter}</div>
    </div>
  );
};
